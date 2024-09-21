//axios的封装处理
import axios from "axios";
import {getToken} from "@/utils/token";
//1.根域名配置
//2.超时时间
//3.请求/相应拦截器

const request = axios.create({
    //baseURL: 'http://127.0.0.1:4523/m1/3290659-0-default',    //请求根地址:Apifox本地Mock请求，post发送到本地可以
    baseURL: 'http://localhost:8080',    //本地请求根地址:8080
    //baseURL: 'https://mock.apifox.com/m1/3290659-0-default',    //请求根地址:Apifox云端Mock请求，post发送到云端会有跨域CORS问题
    timeout: 2000,  //超时时间2s
    headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
//在请求发送之前 做拦截，插入一些自定义的配置
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 操作这个config 注入token数据
    // 1.获取到token
    const token = getToken()
    if(token){
        // 2、按照后端的格式要求做token拼接
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
//在相应返回到客户端之前 做拦截，重点处理返回的数据
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export {request}