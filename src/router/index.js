//路由配置
import Login from "../pages/Login/Login";
import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Register from "@/pages/Register/Register";
import Forum from "@/pages/Forum/Forum";
import FA from "@/pages/Forum/FA/FA";
import TP from "@/pages/Forum/TP/TP";
import Layout from "@/pages/Layout/Layout";
import UserHome from "@/pages/UserHome/UserHome";
import Deal from "@/pages/Deal/Deal";
import DealRecommend from "@/pages/Deal/DealRecommend/DealRecommend";
import DealRequest from "@/pages/Deal/DealRequest/DealRequest";
import Letter from "@/pages/Letter/Letter";
import Notice from "@/pages/Letter/Officialchildren/Notice";
import Examine from "@/pages/Letter/Officialchildren/Examine";
import Discussion from "@/pages/Letter/Discussion";
import PrivateLetter from "@/pages/Letter/PrivateLetter";
import Publish from "@/pages/Publish/Publish";

//配置路由实例

const router = createBrowserRouter([
    {
        //登录
        path: '/',
        element: <Login/>
    },
    {
        //测试
        path: '/layout',
        element: <Layout/>
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
    },
    {
        //个人主页
        path: '/UserHome',
        element: <UserHome/>
    },
    {
        //交易
        path: '/deal',
        element: <Deal />,
        children: [
            {
                path: "DealRecommend",
                element: <DealRecommend />
            },
            {
                path: "DealRequest",
                element: <DealRequest />
            }
        ]
    },
    {
        //发布
        path: '/publish',
        element: <Publish />,
    },
    {
        //通知
        path: '/letter',
        element: <Letter />,
        children:[
            {
                path: '/letter/notice',
                element: <Notice />
            },
            {
                path: '/letter/examine',
                element: <Examine />
            },
            {
                path: '/letter/discussion',
                element: <Discussion />
            },
            {
                path: '/letter/privateletter',
                element: <PrivateLetter />
            },
        ]
    }

])

export default router