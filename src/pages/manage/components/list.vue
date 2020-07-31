<template>
  <div>
    <el-table :data="manageList" border style="width: 100%">
      <el-table-column prop="id" label="用户编号" width="120"></el-table-column>
      <el-table-column prop="username" label="用户名" width="120"></el-table-column>
      <el-table-column prop="rolename" label="所属角色" min-width="150"></el-table-column>
      <el-switch></el-switch>
      <el-table-column prop="address" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.uid)">编辑</el-button>
          <v-del @confirm="del(scope.row.uid)"></v-del>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="total"
      background
      :page-size="3"
      @current-change="fanye"
      layout="prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
import vDel from "../../../components/delBtn";
import { requestManageList, requestManageDelete } from "../../../util/request";
import { mapGetters, mapActions } from "vuex";
import { successAlert, warningAlert } from "../../../util/alert";
export default {
  components: {
    vDel,
  },
  computed: {
    ...mapGetters({
      roleList: "role/list",
      manageList: "manage/list",
      total: "manage/total",
    }),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      requestList: "manage/requestList",
      changePage:'manage/changePage',
      requestRoleList:'role/requestList'
    }),

    //============================ 修改 ==============================
    edit(uid) {
      this.$emit("edit", uid);
    },

    //============================删除============================
    del(uid) {
      requestManageDelete({ uid: uid }).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.requestList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    fanye(e){
      console.log(e);
      this.changePage(e);
      this.requestList()
    }
  },
  mounted() {
      if(this.roleList.length===0){
        this.requestRoleList()
      }
      this.requestList();
  },
};
</script>

<style scoped>
.total {
  margin-top: 10px;
}
</style>