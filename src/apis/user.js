//封装用户相关的所有请求
import {request} from "@/utils";

//1.登录请求

export function loginAPI(formData){
    //发送网络请求
    return request({
        url:'/login',
        method:'POST',//请求方式
        data:formData
    })
}

//2.获取用户信息
export function getProfileAPI(){
    //发送网络请求
    return request({
        url:'/login',
        method:'GET',//请求方式
    })
}


