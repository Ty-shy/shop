<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.show">
      <el-form :model="form">
        <el-form-item label="所属角色" label-width="80px">
          <el-select v-model="form.roleid">
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" label-width="80px">
          <el-input placeholder="请输入内容" v-model="form.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="状态" label-width="80px">
          <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cencel">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添加</el-button>
        <el-button type="primary" @click="upDate" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//  请求      获取角色           获取角色添加   获取角色管理列表
import {
  requestRoleList,
  requestManageAdd,
  requestManageList,
  // 获取其中一条数据
  requestManageInfo,
  // 修改管理员
  requestManageRedit,
} from "../../../util/request";
import { successAlert, warningAlert } from "../../../util/alert";

export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      roleList: "role/list",
      manageList: "manage/list",
    }),
  },
  //!!!!!!!!!!!!!!!!! 数据  !!!!!!!!!!!!!!!!!!!!
  data() {
    return {
      form: {
        roleid: null,
        username: "",
        password: "",
        status: 1,
      },
    };
  },
  // !!!!!!!!!!!!!!!!!!!!! 加载前 !!!!!!!!!!!!!!!!!!!!!!!!!
  mounted() {
    if (this.roleList.length === 0) {
      this.requestRoleList();
    }
  },
  // !!!!!!!!!!!!!!!!!!!!! 方法 !!!!!!!!!!!!!!!!!!!!
  methods: {
    ...mapActions({
      requestRoleList: "role/requestList",
      requestList: "manage/requestList",
    }),
    // ============== 重置  ===============
    empty() {
      this.form = {
        roleid: null,
        username: "",
        password: "",
        status: 1,
      };
    },
    // =============== 关闭 ==========
    cencel() {
      this.info.show = false;
      if(!this.info.isAdd){
        this.empty()
      }
    },

    // ================ 修改 =================
    getDetail(uid) {
      requestManageInfo({ uid: uid }).then((res) => {
        this.form = res.data.list;
        this.form.password = "";
      });
    },

    upDate() {
      requestManageRedit(this.form).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.form = res.data.list;
          this.empty();
          this.cencel();
          this.requestList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    // ================= 添加 ===================
    add() {
      requestManageAdd(this.form).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.empty();
          this.cencel();
          this.requestList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
  },
};
</script>

<style>
</style>