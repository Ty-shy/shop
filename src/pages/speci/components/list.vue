<template>
  <div>
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column prop="id" label="规格编号" width="100"></el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180"></el-table-column>
      <el-table-column label="规格属性" min-width="180">
        <template slot-scope="scope">
          <el-tag v-for="item in scope.row.attrs" :key="item" type="primary">{{item}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="120">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status===1" type="primary">启用</el-button>
          <el-button v-else type="info">禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="primary">编辑</el-button>
          <v-del @confirm="del(scope.row.id)"></v-del>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="fanye"
      :total="total"
      :page-size="3"
      background
      layout="prev, pager, next"
    ></el-pagination>
  </div>
</template>

<script>
import vDel from "../../../components/delBtn"
import { mapGetters, mapActions } from "vuex";
import { requestSpecsList, requestSpecsDelete } from "../../../util/request";
import { successAlert, warningAlert } from '../../../util/alert';
export default {
  // !!!!!!!!!!! 计算属性 !!!!!!!!!!!
  computed: {
    ...mapGetters({
      list: "speci/list",
      total: "speci/total",
    }),
  },
  components:{
    vDel
  },
  // !!!!!!!!!!! 方法 !!!!!!!!!!!!!!!
  methods: {
    ...mapActions({
      requestSpecsList: "speci/requestList",
      changePage: "speci/changePage",
      changeTotal:'speci/changeTotal'
    }),
    // ============== 修改 ===================
    edit(id) {
      this.$emit("edit", id);
    },
    // ================= 删除 =================
    del(id) {
      requestSpecsDelete({id:id}).then(res=>{
        if(res.data.code===200){
          successAlert(res.data.msg);
          this.changeTotal();
          this.requestSpecsList();
        }else{
          warningAlert(res.data.msg)
        }
      })
    },
    // ============== 翻页 ============
    fanye(e) {
      this.changePage(e);
      this.requestSpecsList();
    },
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