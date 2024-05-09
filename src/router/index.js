//路由配置
import Login from "../pages/Login/Login";
import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Register from "@/pages/Register/Register";
import Forum from "@/pages/Forum/Forum";
import FA from "@/pages/Forum/FA/FA";
import TP from "@/pages/Forum/TP/TP";

//配置路由实例

const router = createBrowserRouter([
    {
        //登录
        path: '/',
        element: <Login/>
    },
    {
        //注册
        path: '/register',
        element: <Register/>
    },
    {
        //论坛
        path: '/forum',
        element: <Forum/>,
        children: [
            {
                path: "FA",
                element: <FA/>,
            },
            {
                path: "TP",
                element: <TP/>,
            },
        ]
    }


])

export default router