import React, { useState } from 'react'
import All from './All/All'
import Notice from './Notice/Notice'
import Examine from './Examine/Examine'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import './Official.scss'

const Official = () => {
  const option = [
    {
      index: 0,
      name: "全部",
      path: "All"
    },
    {
      index: 1,
      name: "公告",
      path: "Notice"
    },
    {
      index: 2,
      name: "审核",
      path: "Examine"
    }
  ]
  const [selectedOption, setSelectedOption] = useState(option[0])

  const handleOptionClick = (selected) => {
    setSelectedOption(selected)
  }

  return (
    <div className='official-container'>
      <ul className='list-four'>
        {option.map((post, index) => (
          <li key={index} onClick={() => handleOptionClick(post)}
            className={selectedOption === post ? 'borderActive' : ""}>
            <Link to={post.path || "/"}>
              {post.name}
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<Navigate to="/Letter/Official/All" />} />
        <Route path="/All" element={<All />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path='/Examine' element={<Examine />} />
      </Routes>

    </div>

  )
}

export default Official
