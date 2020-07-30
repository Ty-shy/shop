<template>
  <el-button type="danger" @click="del">删除</el-button>
</template>

<script>
import { warningAlert } from "../util/alert";
export default {
  methods: {
    del() {
      this.$confirm("确定要删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
            this.$emit("confirm")
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style>
</style>