<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-add :info="info" ref="add"></v-add>
    <v-list @edit="edit"></v-list>
  </div>
</template>

<script>
import vAdd from "./components/add";
import vList from "./components/list";
export default {
  // !!!!!!!!!!! 引入 !!!!!!!!
  components: {
    vAdd,
    vList,
  },
  // !!!!!!!!!!!!!! 数据 !!!!!!!!!!
  data(){
    return {
      info:{
        show:false,
        title:'商品分类添加'
      }
    }
  },
  // !!!!!!!!!! 方法 !!!!!!!!!!
  methods:{
    add(){
      this.info.show=true;
      this.info.isAdd=true;
      this.info.title="商品分类添加"
    },
    edit(id){
      this.info.show=true;
      this.info.title="商品分类修改"
      this.$refs.add.getDetail(id);
    }
  }
};
</script>

<style scoped>
div{
  padding: 10px;
}
</style>