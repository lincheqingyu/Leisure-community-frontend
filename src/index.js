import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';//引入antd全局样式
import {RouterProvider} from 'react-router-dom';
import 'normalize.css'
import {Provider} from 'react-redux'

//导入路由
import router from './router';
import store from "@/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*路由绑定*/}
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    </React.StrictMode>
);
