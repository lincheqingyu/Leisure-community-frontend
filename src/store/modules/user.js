// 和用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit';
import { registerAPI, loginAPI, getProfileAPI, getUserInfoAPI } from "@/apis/user";
import { setToken as _setToken, getToken } from "@/utils";
import axios from 'axios';  // 确保已导入 axios

const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token: getToken() || '',
        userInfo: null,  // 修改为null，表示初始状态下没有用户信息
        isLoading: false,
        error: null,
        isRegistered: false
    },
    // 同步修改方法
    reducers: {
        // 设置token
        setToken(state, action) {
            state.token = action.payload;
            // 同时存储在localStorage中
            _setToken(action.payload);
        },
        //  设置用户信息
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        //  设置加载状态
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        //  设置错误信息
        setError(state, action) {
            state.error = action.payload;
        },
        // 注册请求开始
        registerRequest(state) {
            state.isLoading = true;
            state.error = null;
            state.isRegistered = false;
        },
        // 注册成功
        registerSuccess(state) {
            state.isLoading = false;
            state.isRegistered = true;
        },
        // 注册失败
        registerFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

// 解构actionCreate
const {
    setToken,
    setUserInfo,
    setLoading,
    setError,
    registerRequest,
    registerSuccess,
    registerFailure
} = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        try {
            const res = await loginAPI(loginForm);
            dispatch(setToken(res.data.token));
            return { status: 200, data: res.data };
        } catch (error) {
            // 获取状态码和错误信息
            const status = error.response?.status || 500;
            const errorMessage = error.response?.data || error.message || '未知错误';
            
            // 打印格式化的错误信息
            console.error(`登录失败: ${status} ${errorMessage}`);
            
            return { 
                status: status,
                data: errorMessage
            };
        }
    };
};

// 异步方法：获取个人用户信息（从后端API）
const fetchUserInfo = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const res = await getUserInfoAPI();
            dispatch(setUserInfo(res.data));
        } catch (error) {
            console.error('获取用户信息失败:', error);
            dispatch(setError(error.message || '获取用户信息失败'));
        } finally {
            dispatch(setLoading(false));
        }
    };
};

// 异步方法：用户注册 
// 修改 register 函数
const register = (registerForm) => {
    return async (dispatch) => {
        dispatch(registerRequest());
        try {
            const res = await registerAPI(registerForm);
            dispatch(registerSuccess());
            return res.data;
        } catch (error) {
            let errorMessage = '注册失败';
            if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data || error.message;
            } else if (error instanceof Error) {
                errorMessage = error.message;
            }
            dispatch(registerFailure(errorMessage));
            throw new Error(errorMessage);
        }
    };
};

export { fetchLogin, fetchUserInfo, register, setToken };

export default userReducer;
