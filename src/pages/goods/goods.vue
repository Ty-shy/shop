<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-add :info="info"></v-add>
    <v-list></v-list>
  </div>
</template>

<script>
import vList from "./components/list";
import vAdd from "./components/add";
export default {
  components:{
    vList,
    vAdd
  },
  data(){
    return {
      info:{
        show:false,
        title:"商品添加",
      }
    }
  },
  methods:{
    add(){
      this.info.show=true,
      this.info.title="商品添加"
    }
  }
}
</script>

<style scoped>
div {
  padding: 10px;
}
</style>