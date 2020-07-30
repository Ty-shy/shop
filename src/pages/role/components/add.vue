<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show" class="dialog">
      <el-form :model="form">
        <el-form-item label="角色名称" label-width="80px">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <!-- =========== 树形 ========== -->
      <el-form :model="form">
        <el-form-item label="角色权限" label-width="80px">
          <!-- :default-expanded-keys="[2, 3]" -->
          <el-tree
            :data="menuList"
            show-checkbox
            node-key="id"
            ref="tree"
            :default-checked-keys="defaultKeys"
            :props="defaultProps"
          ></el-tree>
        </el-form-item>
      </el-form>
      <!-- =========== 状态 ============ -->
      <el-form :model="form">
        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cencel">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添加</el-button>
        <el-button type="primary" @click="upData" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//      角色删除             获取列表
import { requestRoleDelete, requestRoleList } from "../../../util/request";
import { mapGetters, mapActions } from "vuex";
//      角色添加      角色获取一条         角色修改
import {
  requestRoleAdd,
  requestRoleDeteil,
  requestRoleAmend,
} from "../../../util/request";
import { successAlert, warningAlert } from "../../../util/alert";
export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      menuList: "menu/list",
    }),
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        rolename: "",
        menus: "",
        status: 1,
      },
      formLabelWidth: "120px",
      //树形控件
      defaultKeys: [],
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  mounted() {
    // 如果之前没有list请求就发起一个新的请求
    if (this.menuList.length === 0) {
      this.requestMenuList();
    }
  },
  methods: {
    ...mapActions({
      requestMenuList: "menu/requestList",
      requestList:"role/requestList"
    }),
    cencel() {
      this.info.show = false;
      if (!this.info.isAdd) {
        this.empty();
      }
    },
    empty() {
      this.form = {
        rolename: "",
        menus: "",
        status: 1,
      };
      this.$refs.tree.setCheckedKeys([]);
    },
    add() {
      //将tree上获取到的key 赋值给form.menus上
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      requestRoleAdd(this.form).then((res) => {
        if (res.data.code === 200) {
          //弹框
          successAlert(res.data.msg),
            //清空
            this.empty(),
            //关闭
            this.cencel();
          //从新获取数据列表
          this.requestList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    // 获取一条数据
    getDetail(id) {
      //ajax
      requestRoleDeteil({ id: id }).then((res) => {
        this.form = res.data.list;
        this.form.id = id;
        this.defaultKeys = JSON.parse(res.data.list.menus);
      });
    },
    upData() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      requestRoleAmend(this.form).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cencel();
          this.requestRoleList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
  },
};
</script>

<style scoped>
.dialog {
  min-width: 700px;
}
</style>