<template>
  <div class="cpec_box">
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="规格名称" label-width="80px">
          <el-input v-model="form.specsname"></el-input>
        </el-form-item>

        <el-form-item label="规格属性" label-width="80px">
          <el-input v-model="attr"></el-input>
          <el-button type="primary" @click="newly">新增规格属性</el-button>
        </el-form-item>

        <el-form-item
          v-show="array.length>0"
          v-for="(item,index) in array"
          :key="index"
          label="规格属性"
          label-width="80px"
        >
          <el-input v-model="array[index]"></el-input>
          <el-button type="danger" @click="delrow(index)">删除</el-button>
        </el-form-item>

        <el-form-item label="规格属性" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cencel">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添 加</el-button>
        <el-button type="primary" @click="updata" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { warningAlert, successAlert } from "../../../util/alert";
import {
  requestSpecsAdd,
  requestSpecsInfo,
  requestSpecsEdit,
} from "../../../util/request";
export default {
  props: ["info"],
  // 计算属性
  computed: {
    ...mapGetters({
      speciList: "speci/list",
    }),
  },
  // !!!!!!!!!!! 数据 !!!!!!!!!!
  data() {
    return {
      form: {
        specsname: "",
        attrs: "",
        status: 1,
      },
      attr: "",
      array: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      // ======== 标签 ==============
    };
  },
  // !!!!!!!!!!!! 方法 !!!!!!!!!!!!
  methods: {
    ...mapActions({
      requestSpeciList: "speci/requestList",
    }),
    newly() {
      this.array.unshift(this.attr);
      this.attr = "";
    },
    // 删除规格属性
    delrow(index) {
      this.array.splice(index, 1);
    },
     //重置
    empty() {
      this.form = {
        specsname: "",
        attrs: "",
        status: 1,
      };
      this.array=[]
    },
    // 取消
    cencel() {
      this.info.show = false;

      if (!this.info.isAdd) {
        this.empty();
      }
    },

    // 添加规格属性
    add() {
      console.log(this.array);
      this.form.attrs = JSON.stringify(this.array);
      requestSpecsAdd(this.form).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cencel();
          this.requestSpeciList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    // 编辑
    getDetail(id) {
      requestSpecsInfo({ id: id }).then((res) => {
        if (res.data.code === 200) {
          this.form = res.data.list[0];
          this.array = JSON.parse(this.form.attrs);
        } else {
          warningAlert("获取数据失败");
        }
      });
    },
    // 修改
    updata() {
      this.form.attrs = JSON.stringify(this.array);
      requestSpecsEdit(this.form).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cencel();
          this.requestSpeciList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
  },
};
</script>

<style scoped lang="stylus">
.cpec_box >>> .el-form-item__content {
  display: flex;
}

.cpec_box >>> .el-input {
  flex: 1;
}

.cpec_box >>> .el-btn {
  width: auto;
}
</style>