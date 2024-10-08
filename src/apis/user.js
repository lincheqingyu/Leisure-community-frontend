//封装用户相关的所有请求
import { request } from "@/utils";

// 1.登录请求
export function loginAPI(formData) {
    console.log('Sending login request:', formData);
    return request({
        url: '/login',
        method: 'POST', // 请求方式
        data: formData
    }).then(response => {
        console.log('Login API response:', response);
        return response;
    }).catch(error => {
        console.error('Login API error:', error);
        throw error;
    });
}

// 2.获取用户信息
export function getProfileAPI() {
    //发送网络请求
    return request({
        url: '/profile',
        method: 'GET', // 请求方式
    });
}

// 3.注册请求
export function registerAPI(formData) {
    //发送网络请求
    return request({
        url: '/register',
        method: 'POST', // 请求方式
        data: formData
    });
}

// 获取用户信息
export function getUserInfoAPI() {
    return request({
        url: '/api/user-info',
        method: 'GET',
    }).then(response => {
        console.log('Get user info API response:', response);   //打印响应数据
        return response;//返回响应数据
    }).catch(error => {
        console.error('Get user info API error:', error);   //打印错误信息
        throw error;//抛出错误
    });
}