// 引入vue
// import Vue from "vue";
//引入VueRouter
import { createWebHistory, createRouter } from "vue-router";
const history = createWebHistory();
//引入routes
import routes from "./routes";
//实例化路由对象
export default createRouter({
  history,
  routes,
});


//vue2写法
//引入vue
// import Vue from "vue";
//  //引入VueRouter
// import VueRouter from "vue-router";
// //引入routes
// import routes from "./routes";
// //使用VueRouter
// Vue.use(VueRouter)
// export default new VueRouter({
//   mode:'history',
//   routes
// })