import React, { useState, useEffect } from 'react'
import './Account.scss'
import { EditOutlined } from '@ant-design/icons'
import { getUserInfoAPI } from '@/apis/user'  // 导入封装好的函数

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    userType: '',
    nickname: '',
    telephone: '',
    email: '',
    password: '',
    authenticationInfo: '',
  })

  const [isEditingNickname, setIsEditingNickname] = useState(false)
  const [isEditingPhone, setIsEditingPhone] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isEditingPassword, setIsEditingPassword] = useState(false)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfoAPI()
        console.log('Response in Account:', response);
        
        if (response && response.data) {
          const userData = response.data;
          setUserInfo({
            username: userData.username || '',
            userType: userData.userType === 1 ? '学生' : '教师',
            nickname: userData.nickname || '',
            telephone: userData.telephone || '',
            email: userData.email || '',
            password: '******', // 出于安全考虑，不显示实际密码
            authenticationInfo: userData.authenticationInfo || '',
          })
        } else {
          console.error('Invalid response structure:', response);
        }
      } catch (error) {
        console.error('获取用户信息失败:', error)
        // 这里可以添加错误处理逻辑，比如显示错误消息
      }
    }

    fetchUserInfo()
  }, [])

  const toggleNicknameEditing = () => {
    setIsEditingNickname(!isEditingNickname)
  }

  const togglePhoneEditing = () => {
    setIsEditingPhone(!isEditingPhone)
  }

  const toggleEmailEditing = () => {
    setIsEditingEmail(!isEditingEmail)
  }

  const togglePasswordEditing = () => {
    setIsEditingPassword(!isEditingPassword)
  }

  const handleUpdate = async (field, value) => {
    try {
      // 注意：这里需要一个更新用户信息的 API 函数，目前在 user.js 中没有看到
      // 您可能需要添加一个类似 updateUserInfoAPI 的函数
      // await updateUserInfoAPI(field, value)
      setUserInfo(prevInfo => ({ ...prevInfo, [field]: value }))
      // 根据更新的字段切换编辑状态
      switch(field) {
        case 'nickname':
          setIsEditingNickname(false)
          break
        case 'telephone':
          setIsEditingPhone(false)
          break
        case 'email':
          setIsEditingEmail(false)
          break
        case 'password':
          setIsEditingPassword(false)
          break
        default:
          break
      }
    } catch (error) {
      console.error('更新用户信息失败:', error)
      // 这里可以添加错误处理逻辑
    }
  }

  return (
    <div className='account-all'>
      <div className='main-content'>
        <p>基本信息</p>

        <div className='account-name'>
          <div className='account-left'>用户名：</div>
          <div className='account-content'>{userInfo.username}</div>
        </div>

        <div className='account-type'>
          <div className='account-left'>用户类型：</div>
          <div className='account-content'>{userInfo.userType}</div>
        </div>

        <div className='account-nickname'>
          <div className='account-left'>昵称：</div>
          <div className='account-content'>{userInfo.nickname}</div>
          <div className='account-right'>
            <EditOutlined />
            {isEditingNickname ? (
              <div className="edit-form">
                <input 
                  id='editedNickname' 
                  defaultValue={userInfo.nickname}
                  onBlur={(e) => handleUpdate('nickname', e.target.value)}
                />
                <button onClick={toggleNicknameEditing}>确认修改</button>
              </div>
            ) : (
              <span onClick={toggleNicknameEditing}>修改昵称</span>
            )}
          </div>
        </div>

        <div className='account-phone'>
          <div className='account-left'>手机号：</div>
          <div className='account-content'>{userInfo.telephone}</div>
          <div className='account-right'>
            <EditOutlined />
            {isEditingPhone ? (
              <div className="edit-form">
                <input 
                  id='editedPhone' 
                  defaultValue={userInfo.telephone}
                  onBlur={(e) => handleUpdate('telephone', e.target.value)}
                />
                <button onClick={togglePhoneEditing}>确认修改</button>
              </div>
            ) : (
              <span onClick={togglePhoneEditing}>修改手机号</span>
            )}
          </div>
        </div>

        <div className='account-email'>
          <div className='account-left'>邮箱：</div>
          <div className='account-content'>{userInfo.email}</div>
          <div className='account-right'>
            <EditOutlined />
            {isEditingEmail ? (
              <div className="edit-form">
                <input 
                  id='editedEmail' 
                  defaultValue={userInfo.email}
                  onBlur={(e) => handleUpdate('email', e.target.value)}
                />
                <button onClick={toggleEmailEditing}>确认修改</button>
              </div>
            ) : (
              <span onClick={toggleEmailEditing}>修改邮箱</span>
            )}
          </div>
        </div>

        <div className='account-password'>
          <div className='account-left'>密码：</div>
          <div className='account-content'>{userInfo.password}</div>
          <div className='account-right'>
            <EditOutlined />
            {isEditingPassword ? (
              <div className="edit-form">
                <input 
                  id='editedPassword' 
                  type="password"
                  placeholder="输入新密码"
                  onBlur={(e) => handleUpdate('password', e.target.value)}
                />
                <button onClick={togglePasswordEditing}>确认修改</button>
              </div>
            ) : (
              <span onClick={togglePasswordEditing}>修改密码</span>
            )}
          </div>
        </div>

        <div className='account-authentication'>
          <div className='account-left'>认证信息：</div>
          <div className='account-content'>{userInfo.authenticationInfo}</div>
        </div>

      </div>
    </div>
  )
}

export default Account
