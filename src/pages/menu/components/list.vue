<template>
  <div>
    <el-table :data="list" row-key="id" border :tree-props="{children: 'children'}">
      <el-table-column prop="id" label="菜单编号" width="80"></el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180"></el-table-column>
      <el-table-column label="菜单图标" width="100">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="菜单地址" width="200"></el-table-column>
      <el-table-column prop="address" label="状态" width="120">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { requestMenuDelete } from "../../../util/request";
import { warningAlert, successAlert } from '../../../util/alert';
export default {
  computed: {
    ...mapGetters({
      list: "menu/list",
    }),
  },
  methods: {
    ...mapActions({
      requestList: "menu/requestList",
    }),
    //点击了编辑按钮
    edit(id) {
      this.$emit("edit", id);
    },
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          requestMenuDelete({ id: id }).then((res) => {
            if(res.data.code===200){
              this.requestList();
              successAlert(res.data.msg)
            }else{
              warningAlert(res.data.msg)
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.requestList();
  },
};
</script>

<style scoped>
</style>