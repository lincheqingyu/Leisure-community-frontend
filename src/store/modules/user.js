// 和用户相关的状态管理
import { createSlice } from '@reduxjs/toolkit';
import { registerAPI, loginAPI, getProfileAPI } from "@/apis/user";
import { setToken as _setToken, getToken } from "@/utils";
import axios from 'axios';  // 确保已导入 axios

const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token: getToken() || '',
        userInfo: {},
        isLoading: false,
        error: null,
        isRegistered: false
    },
    // 同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            // 存一份在localstorage
            _setToken(action.payload);
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        registerRequest(state) {
            state.isLoading = true;
            state.error = null;
            state.isRegistered = false;
        },
        registerSuccess(state) {
            state.isLoading = false;
            state.isRegistered = true;
        },
        registerFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

// 解构actionCreate
const { setToken,
    setUserInfo,
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
            console.error(`${status} ${errorMessage}`);
            
            return { 
                status: status,
                data: errorMessage
            };
        }
    };
};

// 异步方法 获取个人用户信息
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getProfileAPI();
        dispatch(setUserInfo(res.data));
    };
};

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
