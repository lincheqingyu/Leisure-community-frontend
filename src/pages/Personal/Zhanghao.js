import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import './Zhanghao.css'
import Zhanghaoheader from './Zhanghaoheader'
import Personalsider from './Personalsider'
import { EditOutlined } from '@ant-design/icons'

const Zhanghao = () => {
  const [userInfo] = useState({
    name: 'zxh',
    leixing: '学生',
    nicheng: '疯狂星期四',
    phone: '132123456',
    email: '132123456@qq.com',
    mima: '******',
    renzheng: '认证中',

  })

  // 使用状态管理昵称和电话的修改状态
  const [isEditingNickname, setIsEditingNickname] = useState(false)
  const [isEditingPhone, setIsEditingPhone] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isEditingMima, setIsEditingMima] = useState(false)


  // 切换昵称编辑状态
  const toggleNicknameEditing = () => {
    setIsEditingNickname(!isEditingNickname)
  }

  // 切换电话编辑状态
  const togglePhoneEditing = () => {
    setIsEditingPhone(!isEditingPhone)
  }

  const toggleEmailEditing = () => {
    setIsEditingEmail(!isEditingEmail)
  }

  const toggleMimaEditing = () => {
    setIsEditingMima(!isEditingMima)
  }

  return (
    <div className='personal-all'>
      <Header />
      <Zhanghaoheader />
      <div className='person-down'>
        <div className='personal-sider'>
          <Personalsider />
        </div>
        <div className='main-content'>
          <p>基本信息</p>

          <div className='zhanghao-name'>
            <div className='zhanghao-left'>
              用户名：
            </div>
            <div className='zhanghao-content'>
              {userInfo.name}
            </div>
          </div>

          <div className='zhanghao-leixing'>
            <div className='zhanghao-left'>
              用户类型：
            </div>
            <div className='zhanghao-content'>
              {userInfo.leixing}
            </div>
          </div>

          <div className='zhanghao-nicheng'>
            <div className='zhanghao-left'>
              昵称：
            </div>
            <div className='zhanghao-content'>
              {userInfo.nicheng}
            </div>
            <div className='zhanghao-right'>
              <EditOutlined />
              {isEditingNickname ? (
                <div>
                  <input id='editedNickname' defaultValue={userInfo.nicheng} />
                  <button onClick={toggleNicknameEditing}>确认修改</button>
                </div>
              ) : (
                <span onClick={toggleNicknameEditing}>修改昵称</span>
              )}
            </div>
          </div>


          <div className='zhanghao-phone'>
            <div className='zhanghao-left'>
              手机号：
            </div>
            <div className='zhanghao-content'>
              {userInfo.phone}
            </div>
            <div className='zhanghao-right'>
              <EditOutlined />
              {isEditingPhone ? (
                <div>
                  <input id='editedPhone' defaultValue={userInfo.phone} />
                  <button onClick={togglePhoneEditing}>确认修改</button>
                </div>
              ) : (
                <span onClick={togglePhoneEditing}>修改昵称</span>
              )}
            </div>
          </div>


          <div className='zhanghao-email'>
            <div className='zhanghao-left'>
              邮箱：
            </div>
            <div className='zhanghao-content'>
              {userInfo.email}
            </div>
            <div className='zhanghao-right'>
              <EditOutlined />
              {isEditingEmail ? (
                <div>
                  <input id='editedEmail' defaultValue={userInfo.email} />
                  <button onClick={toggleEmailEditing}>确认修改</button>
                </div>
              ) : (
                <span onClick={toggleEmailEditing}>修改昵称</span>
              )}
            </div>
          </div>


          <div className='zhanghao-mima'>
            <div className='zhanghao-left'>
              密码：
            </div>
            <div className='zhanghao-content'>
              {userInfo.mima}
            </div>
            <div className='zhanghao-right'>
              <EditOutlined />
              {isEditingMima ? (
                <div>
                  <input id='editedMima' defaultValue={userInfo.mima} />
                  <button onClick={toggleMimaEditing}>确认修改</button>
                </div>
              ) : (
                <span onClick={toggleMimaEditing}>修改昵称</span>
              )}
            </div>
          </div>



          <div className='zhanghao-renzheng'>
            <div className='zhanghao-left'>
              认证信息：
            </div>
            <div className='zhanghao-content'>
              {userInfo.renzheng}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Zhanghao
