/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-30 14:20:56
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-02-03 16:10:45
 * @FilePath: \my-first-reactd:\桌面\小日常\web练习\new_code2\src\pages\Deal\Deal.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Deal.js
import React, { useState } from 'react'
import "./Deal.css"
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Input } from 'antd';
import DealRecommend from './DealRecommend/DealRecommend';
import DealRequest from "./DealRequest/DealRequest"
import Header from '@/components/Header/Header';
const { Search } = Input;
const Deal = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  // 点击切换高亮：
  const [show, setShow] = useState(0)
  const HL = (item, index) => {
    setShow(index)
  }
  const transactionList = [
    {
      index: 0,
      name: "推荐",
      path: "DealRecommend"
    },
    {
      index: 1,
      name: "出闲置",
      path: "DealRecommend"
    },
    {
      index: 2,
      name: "求闲置",
      path: "DealRequest"
    }
  ]
  return (
    <div className=''>
      <Header/>
      <h1>
        <div className='searchTwo'>
          <Search
            placeholder="搜索内容"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
          />
        </div>
      </h1>
      <div className='wrap'>
        <div className='wrap-top'>
          <ul>
            {
              transactionList.map((post, index) => {
                // 此处要返回li
                return (
                  <Link to={post.path}>
                    <li key={post.index} onClick={() => {
                      HL(post, index)
                    }}
                      className={index === show ? 'borderActive' : ""}
                    >
                      {post.name}
                    </li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
        <Routes>
          <Route index path='/' element={<Navigate to="/Deal/DealRecommend" />}></Route>
          <Route path="/DealRecommend" element={<DealRecommend />}></Route>
          <Route path='/DealRequest' element={<DealRequest />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default Deal