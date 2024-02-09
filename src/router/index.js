//路由配置
import Login from "../pages/Login/Login";
import Layout from "../pages/Layout/Layout";
import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Register from "@/pages/Register/Register";

//配置路由实例

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/layout',
        element: <Layout />,
        children:[
            {
                path:'',
                element:<></>
            }
        ]
    },
    {
        path:'/register',
        element:<Register />
    }
])

export default router