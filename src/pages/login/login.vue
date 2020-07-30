<template>
  <div class="login_warp">
      <div class="login_box">
        <h3>登录</h3>
        
        <el-input class="input" clearable ></el-input>
        <el-input class="input" clearable show-password></el-input>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .login_warp{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to right, #553444, #303d60);
  }
  .login_box{
    width: 420px;
    padding: 20px;
    position:fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .input{
    width: 360px;
    height: 42px;
    font-size: 24px;

  }
</style>