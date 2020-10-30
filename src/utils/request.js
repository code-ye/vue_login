//封装axios，定义拦截器
import axios from "axios";
const request = axios.create({
  baseURL: "/",
  timeout: 10000,
});

//请求拦截器
request.interceptors.request.use((config) => {
  return config;
});

//响应拦截器
request.interceptors.response.use(
  (response) => {
    if (response.data.code === 20000) {
      // 功能成功 -- 返回成功的数据
      return response.data.data;
    } else {
      return Promise.reject(response.data.message);
    }
  },
  //响应失败，非2xx
  (error) => {
    return Promise.reject(error.message);
  }
);

export default request;
