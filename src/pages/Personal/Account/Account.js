import React, { useState } from 'react'
import './Account.scss'
import { EditOutlined } from '@ant-design/icons'

const Account = () => {
  const [userInfo] = useState({
    name: 'zxh',
    type: '学生',
    nickname: '疯狂星期四',
    phone: '132123456',
    email: '132123456@qq.com',
    password: '******',
    authentication: '认证中',

  })

  // 使用状态管理昵称和电话的修改状态
  const [isEditingNickname, setIsEditingNickname] = useState(false)
  const [isEditingPhone, setIsEditingPhone] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isEditingPassword, setIsEditingPassword] = useState(false)


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

  const togglePasswordEditing = () => {
    setIsEditingPassword(!isEditingPassword)
  }

  return (
    <div className='account-all'>
      <div className='main-content'>
        <p>基本信息</p>

        <div className='account-name'>
          <div className='account-left'>
            用户名：
          </div>
          <div className='account-content'>
            {userInfo.name}
          </div>
        </div>

        <div className='account-type'>
          <div className='account-left'>
            用户类型：
          </div>
          <div className='account-content'>
            {userInfo.type}
          </div>
        </div>

        <div className='account-nickname'>
          <div className='account-left'>
            昵称：
          </div>
          <div className='account-content'>
            {userInfo.nickname}
          </div>
          <div className='account-right'>
            <EditOutlined />
            {isEditingNickname ? (
              <div>
                <input id='editedNickname' defaultValue={userInfo.nickname} />
                <button onClick={toggleNicknameEditing}>确认修改</button>
              </div>
            ) : (
              <span onClick={toggleNicknameEditing}>修改昵称</span>
            )}
          </div>
        </div>


        <div className='account-phone'>
          <div className='account-left'>
            手机号：
          </div>
          <div className='account-content'>
            {userInfo.phone}
          </div>
          <div className='account-right'>
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


        <div className='account-email'>
          <div className='account-left'>
            邮箱：
          </div>
          <div className='account-content'>
            {userInfo.email}
          </div>
          <div className='account-right'>
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


        <div className='account-password'>
          <div className='account-left'>
            密码：
          </div>
          <div className='account-content'>
            {userInfo.password}
          </div>
          <div className='account-right'>
            <EditOutlined />
            {isEditingPassword ? (
              <div>
                <input id='editedPassword' defaultValue={userInfo.password} />
                <button onClick={togglePasswordEditing}>确认修改</button>
              </div>
            ) : (
              <span onClick={togglePasswordEditing}>修改昵称</span>
            )}
          </div>
        </div>



        <div className='account-authentication'>
          <div className='account-left'>
            认证信息：
          </div>
          <div className='account-content'>
            {userInfo.authentication}
          </div>
        </div>

      </div>
    </div>
  )
}


export default Account
