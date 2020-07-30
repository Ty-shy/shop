<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
      <v-add :info="info" ref="add"></v-add>
      <v-list @edit="edit($event)"></v-list>
  </div>
</template>

<script>
import vAdd from "./components/add"
import vList from "./components/list"
export default {
  components:{
    vAdd,
    vList
  },
  data(){
    return {
      info:{
        show:false,
        title:"管理员添加"
      }
    }
  },
  methods:{
    add(){
      this.info.show=true;
      this.info.title="管理员添加";
      this.info.isAdd=true;
    },
    edit(uid){
      this.info.show=true;
      this.info.title="管理员修改";
      this.info.isAdd=false;
      this.$refs.add.getDetail(uid);
    }
  }
}
</script>

<style scoped>
  div {
    padding: 10px;
  }
</style>