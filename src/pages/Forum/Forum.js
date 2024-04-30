/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-30 14:20:56
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-02-02 23:54:22
 * @FilePath: \my-first-reactd:\桌面\小日常\web练习\new_code2\src\pages\Forum\Forum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import Header from '@/components/Header/Header'
// import Layout from '../Layout/Layout'
import './Forum.scss'
import { Input } from 'antd';
import FA from './FA/FA';
import TP from './TP/TP';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Forum = () => {
  const option = [
    {
      index: 0,
      name: "关注",
      path: "FA"
    },
    {
      index: 1,
      name: "推荐",
      path: "FA"
    },
    {
      index: 2,
      name: "热搜",
      path: "TP"
    }
  ]
  const [isShow, setIsShow] = useState(0)
  const listStatus = (item, index) => {
    setIsShow(index)
  }
  return (
    <div>
      <Header />
      <h1>
        <ul className='list-one'>
          {
            option.map((post, index) => {
              return (
                <Link to={post.path || "/"}>
                  <li key={index} onClick={() => {
                    listStatus(post, index)
                  }}
                    className={isShow === index ? 'borderActive' : " "}>
                    {/* 此处用post方法表示遍历到当前层的name，而不是用option.name */}
                    {post.name}
                  </li>
                </Link>
              )
            })}
        </ul>
        <Search
          addonBefore="搜索"
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 400,
            height: 500
          }}
        />
      </h1>

      {/* <Layout> */}
      <Routes>
        {/* 实现进入页面时候重定向 */}
        <Route path="/" element={<Navigate to="/Forum/FA" />} />
        <Route path="/FA" element={<FA />}></Route>
        <Route path='/TP' element={<TP />}></Route>
      </Routes>
      {/* </Layout> */}
    </div>
  )
}

export default Forum