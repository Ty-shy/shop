<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>
    <v-add :info="info" ref="add"></v-add>
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
  methods: {
    add() {
      this.info.show = true;
      this.info.title = "规格添加";
      this.info.isAdd = true;
    },
    edit(id) {
      this.info.show = true;
      this.info.title = "规格编辑";
      this.info.isAdd = false;
      this.$refs.add.getDetail(id);
    },
  },
};
</script>

<style scoped>
div {
  padding: 10px;
}
</style>