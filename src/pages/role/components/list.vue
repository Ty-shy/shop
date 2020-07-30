<template>
  <div>
    <el-table :data="list" height="450" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="173"></el-table-column>
      <el-table-column prop="rolename" label="姓名名称" width="240"></el-table-column>
      <el-table-column prop="address" label="状态" min-width="160">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status===1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作" width="240">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <del-btn @confirm="del(scope.row.id)"></del-btn>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import { requestRoleDelete, requestRoleDeteil ,requestRoleList} from "../../../util/request"
import { successAlert, warningAlert } from '../../../util/alert';
export default {
  computed:{
    ...mapGetters({
      list:'role/list'
    })
  },
  data() {
    return {}
  },
  methods:{
    ...mapActions({
      requestList:"role/requestList"
    }),
    edit(id){
      this.$emit("edit",id)
    },
    //删除
    del(id){
      requestRoleDelete({id:id}).then(res=>{
        if(res.data.code===200){
          successAlert(res.data.msg);
          this.requestList();
        }else{
          warningAlert(res.data.msg)
        }
      })
    }
  },
  mounted(){
    if(this.list.length===0){
      this.requestList();
    }
    
  }
};
</script>

<style>
</style>