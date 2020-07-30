import Vue from "vue"
var vm = new Vue();

//成功弹框
export const successAlert=(msg)=>{
    vm.$message({
        message:msg,
        type:'success'
    });
}
//警告
export const warningAlert=(msg)=>{
    vm.$message({
        message:msg,
        type:'swarning'
    });
}
//成功弹框
export const errorAlert=(msg)=>{
    vm.$message.error(msg)
}