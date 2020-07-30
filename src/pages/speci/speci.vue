<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-list></v-list>
    <v-add :info="info" ></v-add>
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
  //  !!!!!!!!!!!! 数据 !!!!!!!!!!!
  data() {
    return {
      info: {
        show: false,
        title: "规格添加",
        isAdd: true,
      },
    };
  },
  //   !!!!!!!!! 方法 !!!!!!!!!!!
  methods:{
      add(){
          this.info.show=true;
          this.info.title="规格添加";
          this.info.isAdd=true;
      }
  }
};
</script>

<style scoped>
div {
  padding: 10px;
}
</style>