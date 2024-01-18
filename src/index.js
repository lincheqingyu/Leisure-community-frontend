import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';//引入antd全局样式
import {RouterProvider} from 'react-router-dom';

//导入路由
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*路由绑定*/}
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
