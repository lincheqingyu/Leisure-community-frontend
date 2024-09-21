import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserInfo } from '@/store/modules/user'
import Header from '@/components/Header/Header'
import './Personal.scss'
import Collect from './Collect/Collect'
import Record from './Record/Record'
import Realname from './Realname/Realname'
import Account from './Account/Account'
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom'

const Personal = () => {
    const dispatch = useDispatch()
    const { userInfo, isLoading, error } = useSelector((state) => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch])

    // 处理修改信息按钮点击事件
    const handleEditClick = () => {
        navigate('/personal/account')
    }

    const option = [
        { index: 0, name: "个人收藏", path: "Collect" },
        { index: 1, name: "交易记录", path: "Record" },
        { index: 2, name: "实名认证", path: "Realname" },
        { index: 3, name: "账号管理", path: "Account" }
    ]

    if (isLoading) return <div>加载中...</div>
    if (error) return <div>错误：{error}</div>
    if (!userInfo) return null

    return (
        <div className='personal-bk'>
            <Header />
            <div className='personalheader-all'>
                <div className='user-profile'>
                    <div className='user-main'>
                        {/* 左侧头像 */}
                        <div className='avatar'>
                            <img 
                                src={userInfo.avatar.includes('/') 
                                    ? userInfo.avatar 
                                    : require(`../../assets/images/personal/${userInfo.avatar}`)} 
                                alt='用户头像'
                            />
                        </div>

                        {/* 中间用户信息 */}
                        <div className='user-info'>
                            <h2>{userInfo.nickname} | LV. {userInfo.level}</h2>
                            <p>{userInfo.location} | {userInfo.school}</p>
                            <p>粉丝 {userInfo.followers} | 关注 {userInfo.following} | 点赞 {userInfo.likes}</p>
                        </div>
                    </div>

                    {/* 右侧修改信息按钮 */}
                    <div className='edit-button'>
                        <button onClick={handleEditClick}>修改信息</button>
                    </div>
                </div>
            </div>
            <div className='personal-container'>
                <div className='personal-main'>
                    <ul className='list-three'>
                        {option.map((post) => (
                            <li key={post.index}>
                                <Link to={post.path || "/"} >
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
