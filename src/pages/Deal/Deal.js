import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import './Deal.scss'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Input } from 'antd'
import DealRecommend from './DealRecommend/DealRecommend'
import DealRequest from "./DealRequest/DealRequest"
const { Search } = Input

const Deal = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value)
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
    <div className='unuse-all'>
      <Header />
      <div className='deal-search'>
        <Search
            placeholder="搜索内容"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
            className='searchOne'
        />
      </div>
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