import React, { useState } from 'react'
import Header from '@/components/Header/Header'
import './Personal.scss'
import Collect from './Collect/Collect'
import Record from './Record/Record'
import Realname from './Realname/Realname'
import Account from './Account/Account'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Personal = () => {
    const [userInfo] = useState({
        name: '晴绘',
        level: 'Lv.1',
        followers: '粉丝 0 | 关注 0 | 点赞 0',
        location: '南京 | 南京理工大学紫金学院',
    })
    // 使用React Router的 useNavigate 获取导航函数
    const navigate = useNavigate()

    // 处理修改信息按钮点击事件
    const handleEditClick = () => {
        // 直接跳转到另一个页面，例如 '/first'
        navigate('/personal/account')
    }
    const option = [
        {
            index: 0,
            name: "个人收藏",
            path: "Collect"
        },
        {
            index: 1,
            name: "交易记录",
            path: "Record"
        },
        {
            index: 2,
            name: "实名认证",
            path: "Realname"
        },
        {
            index: 3,
            name: "账号管理",
            path: "Account"
        }
    ]
    const [selectedOption, setSelectedOption] = useState(option[0])

    const handleOptionClick = (selected) => {
        setSelectedOption(selected)
    }
    return (
        <div className='personal-bk'>
            <Header />
            <div className='personalheader-all'>
                <div className='user-profile'>
                    <div className='user-main'>
                        {/* 左侧头像 */}
                        <div className='avatar'>
                            <img src={require('../../assets/images/personal/personalheadlike.png')} alt='用户头像' />
                        </div>

                        {/* 中间用户信息 */}
                        <div className='user-info'>
                            <h2>{userInfo.name} {userInfo.level}</h2>
                            <p>{userInfo.location}</p>
                            <p>{userInfo.followers}</p>
                        </div>
                    </div>


                    {/* 右侧修改信息按钮 */}
                    <div className='edit-button'>
                        {/* 点击按钮直接执行跳转逻辑 */}
                        <button onClick={handleEditClick}>修改信息</button>
                    </div>
                </div>
            </div>
            <div className='personal-container'>
                <div className='personal-main'>
                    <ul className='list-three'>
                        {option.map((post, index) => (
                            <li key={index} onClick={() => handleOptionClick(post)}
                                className={selectedOption === post ? 'borderActive' : ""}>
                                <Link to={post.path || "/"}>
                                    {post.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='personal-content'>
                        <Routes>
                            <Route path="/" element={<Navigate to="/Personal/Collect" />} />
                            <Route path="/Collect" element={<Collect />} />
                            <Route path="/Record" element={<Record />} />
                            <Route path='/Realname' element={<Realname />} />
                            <Route path='/Account' element={<Account />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal
