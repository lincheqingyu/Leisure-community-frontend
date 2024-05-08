import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import './Forum.scss';
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
  ];
  const [selectedOption, setSelectedOption] = useState(option[0]);

  const handleOptionClick = (selected) => {
    setSelectedOption(selected);
  };

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
          <div className='search-container'>
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

export default Forum;
