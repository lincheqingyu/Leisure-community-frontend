/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-06-07 14:51:57
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-07 15:09:27
 * @FilePath: \new_code_1d:\日常小软件\WeChat Files\新建文件夹\WeChat Files\wxid_mveuc1a21drc22\FileStorage\File\2024-06\Leisure-community-main\Leisure-community-main\src\pages\Forum\Forum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import './Forum.scss'
import { Input } from 'antd'
import FA from './FA/FA'
import TP from './TP/TP'
import { Route, Routes, Link, Navigate } from 'react-router-dom'

const { Search } = Input

const onSearch = (value, _e, info) => console.log(info?.source, value)

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
  const [selectedOption, setSelectedOption] = useState(option[0])

  const handleOptionClick = (selected) => {
    setSelectedOption(selected)
  }

  return (
    <div className='forum-bk'>
      <Header />
      <div className='forum-container'>
        <ul className='list-one'>
          {option.map((post, index) => (
            <li key={index} onClick={() => handleOptionClick(post)}
              className={selectedOption === post ? 'borderActive' : ""}>
              <Link to={post.path || "/"}>
                {post.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='Search'>
          <Search
            addonBefore="搜索"
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 300 }}
          />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/Forum/FA" />} />
        <Route path="/FA" element={<FA />} />
        <Route path='/TP' element={<TP />} />
      </Routes>
    </div>
  )
}

export default Forum
