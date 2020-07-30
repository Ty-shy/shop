<template>
  <div>
    <el-table
      :data="catelist"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{children: 'children'}"
    >
      <el-table-column prop="id" label="分类编号" sortable width="80"></el-table-column>
      <el-table-column prop="catename" label="分类名称" sortable width="120"></el-table-column>
      <el-table-column label="图片" width="160">
        <template slot-scope="scope">
          <img :src="$imgPre+scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column label="状态" width="160">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status==1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" sortable min-width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <v-del @confirm="del(scope.row.id)"></v-del>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  requestCateList,
  requestCateInfo,
  requestCateDelete,
} from "../../../util/request";
import { successAlert, warningAlert } from "../../../util/alert";
import vDel from "../../../components/delBtn";
export default {
  components: {
    vDel,
  },
  // !!!!!!!!! 数据 !!!!!!!!!
  data() {
    return {};
  },
  // !!!!!!!!! 计算属性 !!!!!!!!!
  computed: {
    ...mapGetters({
      catelist: "cate/list",
    }),
  },
  // !!!!!!!!!!!! 方法 !!!!!!!!!!!
  methods: {
    ...mapActions({
      requestCateList: "cate/requestList",
    }),
    //============ 删除 =============
    del(id) {
      requestCateDelete({ id: id }).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.requestCateList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    // ======== 修改 ===========
    edit(id) {
      this.$emit("edit",id);
    },
  },
  // !!!!!!!!!!! 加载前 !!!!!!!!!!!
  mounted() {
    if(this.catelist.length===0){
      this.requestCateList();
    }
  },
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>