import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import './Letter.scss'
import Official from './Official/Official'
import Discussion from './Discussion/Discussion'
import Privateletter from './Privateletter/Privateletter'
import { Route, Routes, Link, Navigate } from 'react-router-dom'


const Letter = () => {
  const option = [
    {
      index: 0,
      name: "官方",
      path: "Official"
    },
    {
      index: 1,
      name: "通知",
      path: "Discussion"
    },
    {
      index: 2,
      name: "私信",
      path: "Privateletter"
    }
  ]
  const [selectedOption, setSelectedOption] = useState(option[0])

  const handleOptionClick = (selected) => {
    setSelectedOption(selected)
  }

  return (
    <div className='letter-bk'>
      <Header />
      <div className={'letter-title'}>消息中心</div>
      <div className='letter-container'>
        <ul className='list-two'>
          {option.map((post, index) => (
            <li key={index} onClick={() => handleOptionClick(post)}
              className={selectedOption === post ? 'borderActive' : ""}>
              <Link to={post.path || "/"}>
                {post.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='letter-content'>
          <Routes>
            <Route path="/" element={<Navigate to="/Letter/Official" />} />
            <Route path="/Official/*" element={<Official />} />
            <Route path="/Discussion/*" element={<Discussion />} />
            <Route path='/Privateletter' element={<Privateletter />} />
          </Routes>
        </div>
      </div>


    </div>
  )
}

export default Letter
