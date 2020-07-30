<template>
  <div>
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column prop="id" label="规格编号" width="100"></el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180"></el-table-column>
      <el-table-column  label="规格属性" min-width="180">
        <template slot-scope="scope">
          <el-tag v-for="item in scope.row.attrs" :key="item" type="primary">{{item}}</el-tag>
      </template>
      </el-table-column>
      <el-table-column prop="name" label="状态" width="120"></el-table-column>
      <el-table-column prop="name" label="操作" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { requestSpecsList } from "../../../util/request";
export default {
  // !!!!!!!!!!! 计算属性 !!!!!!!!!!!
  computed: {
    ...mapGetters({
      list: "speci/list",
    }),
  },

  // !!!!!!!!!!! 方法 !!!!!!!!!!!!!!!
  methods: {
    ...mapActions({
      requestSpecsList: "speci/requestList",
    }),
  },
  // !!!!!!!!!!!!! 数据 !!!!!!!!!!!
  data() {
    return {};
  },
  mounted() {
    this.requestSpecsList();
    // console.log(this.requestSpecsList());
    console.log(this.list);
  },
};
</script>

<style scoped>
</style>