// 和用户相关的状态管理

import {createSlice } from '@reduxjs/toolkit'
import {request} from '@/utils'
import {setToken as _setToken,getToken} from "@/utils";
import {loginAPI,getProfileAPI} from "@/apis/user";


const userStore=createSlice({
    name:'user',
    //数据状态
    initialState:{
        token:getToken()||'',
        uerInfo:{}
    },
    //同步修改方法
    reducers:{
        setToken(state,action){
            state.token=action.payload
            //存一份在localstorage
            _setToken(action.payload)
        },
        setuserInfo(state,action){
            state.userInfo=action.payload
        }
    }
})

// 解构actionCreate
const {setToken,setuserInfo}=userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异步方法 完成登录获取token
const fetchLogin=(loginForm)=>{
    return async (dispatch) => {
        //发送异步请求
        //const res = await request.post('/login', loginForm)
        const res =await loginAPI(loginForm)
        //提交同步action进行token的存入
        dispatch(setToken(res.data.token))
    }
}

//异步方法 获取个人用户信息
const fetchUserInfo=()=>{
    return async (dispatch) => {
        //const res=await request.get('')
        const res= await getProfileAPI()
        dispatch(setuserInfo(res.data))
    }
}


export  {fetchLogin, fetchUserInfo, setToken}

export default userReducer