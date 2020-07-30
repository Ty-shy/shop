// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui
import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)


//图片展示 
Vue.prototype.$imgPre = "http://localhost:3000"
//引入初始化css
import "./assets/css/reset.css"

import store from "./store"

// 处理公共组件
import commonComponents from "./components"
for(let i in commonComponents){
  Vue.component(i,commonComponents[i]);
}

//处理过滤器 
import filters from "./filters"
for(let i in filters){
  Vue.filter(i,filters[i])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
