<template>
  <div>
    <el-container>
      <el-aside class="index_aside" width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#20222a"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <!-- ＝＝＝＝＝＝＝＝＝＝＝＝　首页　＝＝＝＝＝＝＝＝＝＝＝ -->
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- ＝＝＝＝＝＝＝＝＝＝＝＝　系统设置　＝＝＝＝＝＝＝＝＝＝ -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/menu">菜单管理</el-menu-item>
              <el-menu-item index="/role">角色管理</el-menu-item>
              <el-menu-item index="/manage">管理员管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- ＝＝＝＝＝＝＝＝＝＝＝＝　商城管理　＝＝＝＝＝＝＝＝＝＝＝＝＝ -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商城管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/cate">商品分类</el-menu-item>
              <el-menu-item index="/speci">商品规格</el-menu-item>
              <el-menu-item index="/goods">商品管理</el-menu-item>
              <el-menu-item index="/member">会员管理</el-menu-item>
              <el-menu-item index="/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/seckill">秒杀活动</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <!-- ＝＝＝＝＝＝＝＝＝＝＝＝＝导航结束＝＝＝＝＝＝＝＝＝＝＝＝ -->
      </el-aside>
      <el-container>
        <el-header class="index_header">
          <div class="user">
            <span>admin</span>
            <i class="el-icon-user-solid"></i>
            <el-button type="primary">退出</el-button>
          </div>
        </el-header>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.index_aside {
  height: 100vh;
  background: #20222a;
}
.index_header {
  background: #b3c0d1;
}
.user {
  float: right;
  line-height: 60px;
}
</style>