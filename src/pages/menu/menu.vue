<template>
  <div class="menu_box">
    <el-button type="primary" @click="add">添加</el-button>
    <!-- ================== 修改 ============= -->
    <v-add   :info="info" ref="add"></v-add>
    <!-- ================= 列表 ============== -->
    <v-list @edit="edit"></v-list>
  </div>
</template>

<script>
import vList from "./components/list";
import vAdd from "./components/add";
export default {
  components: {
    vList,                                                                                                                                                                                                             
    vAdd,
  },
  data() {
    return {
      //传递给子组件的信息
      info: { show: false },
      title:"菜单添加"
    };
  },
  methods: {
    add() {
      this.info.show = true;
      this.info.title="菜单添加",
      this.info.isAdd=true;
    },
    //点击了编辑
    edit(id){
      this.info.show=true;
      this.info.title="菜单编辑"
      this.info.isAdd=false;
      this.$refs.add.getDetail(id)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    }
  },
};
</script>

<style scoped>
.menu_box {
  padding: 10px;
}
</style>