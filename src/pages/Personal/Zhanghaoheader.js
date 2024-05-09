import React from 'react'
import './Zhanghaoheader.css'
import { useState } from 'react'

const Personalheader = () => {
  const [userInfo] = useState({
    name: '晴绘',
    level: 'Lv.1',
    followers: '粉丝 0 | 关注 0 | 点赞 0',
    location: '南京 | 南京理工大学紫金学院',
  })


  return (
    <div className='personalheader-all'>
      <div className='user-profile'>
        {/* 左侧头像 */}
        <div className='avatar'>
          <img src={require('../../assets/images/personalheadlike.png')} alt='用户头像' />
        </div>

        {/* 中间用户信息 */}
        <div className='user-info'>
          <h2>{userInfo.name} {userInfo.level}</h2>
          <p>{userInfo.location}</p>
          <p>{userInfo.followers}</p>
        </div>

      </div>
    </div>
  )
}

export default Personalheader
