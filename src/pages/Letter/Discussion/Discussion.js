import React, { useState } from 'react'
import './Discussion.scss'
import Comment from './Comment/Comment'
import { Route, Routes, Link, Navigate } from 'react-router-dom'

const Discussion = () => {
  const option = [
    {
      index: 0,
      name: "评论",
      path: "Comment"
    }
  ]
  const [selectedOption, setSelectedOption] = useState(option[0])

  const handleOptionClick = (selected) => {
    setSelectedOption(selected)
  }
  return (
    <div className='discussion-container'>
      <ul className='list-five'>
        {option.map((post, index) => (
          <li key={index} onClick={() => handleOptionClick(post)}
            className={selectedOption === post ? 'borderActive' : ""}>
            <Link to={post.path || "//Letter/Discussion"}>
              {post.name}
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<Navigate to="/Letter/Discussion/Comment" />} />
        <Route path="/Comment" element={<Comment />} />
      </Routes>
    </div>
  )
}

export default Discussion