<template>
  <div class="cate">
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="上级分类" label-width="80px">
          <el-select v-model="form.pid" placeholder="请选择上级分类">
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 动态数据 -->
            <el-option
              v-for="item in cateList"
              :label="item.catename"
              :key="item.id"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" label-width="80px">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" label-width="80px" v-if="form.pid!==0">
          <el-upload class="avatar-uploader" action :show-file-list="false" :on-change="changeImg">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cencel">取消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添加</el-button>
        <el-button type="primary" @click="updata" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  requestCateAdd,
  requestCateList,
  requestCateDelete,
  requestCateInfo,
  requestCateEdit,
} from "../../../util/request";
import { mapGetters, mapActions } from "vuex";
import { successAlert, warningAlert } from "../../../util/alert";
export default {
  props: ["info"],
  // !!!!!!! 数据 !!!!!!!!
  data() {
    return {
      imageUrl: "",
      form: {
        pid: "",
        catename: "",
        img: "",
        status: 1,
      },
    };
  },
  // !!!!!!!!!!!! 计算属性 !!!!!!!!!!!!!
  computed: {
    ...mapGetters({
      cateList: "cate/list",
    }),
  },
  //   !!!!!!!!!!!!! 方法 !!!!!!!!!!!!!
  methods: {
    ...mapActions({
      requestCateList: "cate/requestList",
    }),
    // ============ 图片 ===========
    changeImg(e) {
      console.log(e);
      //控制图片的大小
      if (e.size > 2 * 1024 * 1024) {
        warningAlert("上传的图片不能超过2M");
        return;
      }
      //上传的图片必须是.png .jpg .gif .jpeg
      var extname = e.name.slice(e.name.lastIndexOf("."));
      var extArr = [".png", ".jpg", ".gif", ".jpeg"];
      if (!extArr.some((item) => item === extname)) {
        warningAlert(
          "上传的必须是图片,并且格式为png、jpg、gif、jpeg格式的图片"
        );
        return;
      }
      // file 是上传的文件
      var file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
    // ========= 取消 =========
    cencel() {
      this.info.show = false;
      this.imageUrl = "";
    },
    // ========== 重置 =========
    empty() {
      this.form = {
        pid: "",
        catename: "",
        img: "",
        status: 1,
      };
    },
    // ========== 添加 ==========
    add() {
      requestCateAdd(this.form).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.cencel();
          this.empty();
          this.requestCateList();
        } else {
          warningAlert(res.date.msg);
        }
      });
    },
    //  ============== 修改 ===========
    getDetail(id) {
      requestCateInfo({ id: id }).then((res) => {
        if (res.data.code === 200) {
          this.form = res.data.list;
          this.form.id=id;
          this.imageUrl = this.$imgPre + res.data.list.img;

        }else{
          warningAlert("获取数据失败")
        }
      });
    },
    updata(){
      requestCateEdit(this.form).then(res=>{
        if(res.data.code===200){
          successAlert(res.data.msg)
          this.empty();
          this.cencel();
          this.requestCateList();
        }else{
          warningAlert(res.data.msg)
        }
      
      })
    }
  },

  // !!!!!!!!!!!!!!! 响应前 !!!!!!!!!!
  mounted() {
  },
};
</script>

<style scoped lang="stylus">
.cate >>> .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.cate .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>