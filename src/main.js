import { createApp } from "vue";
import App from "./App.vue";
//引入路由
import router from "./router";
const app = createApp(App);
console.log(router);
app.use(router);
app.mount("#app");

//vue2
// import Vue from 'vue'
// import App from './App.vue'
// //引入路由
// import router from './router'
// new Vue({
//   render: h => h(App),

//   router,
// }).$mount('#app')
// mobx dva umi next.js gisl7

