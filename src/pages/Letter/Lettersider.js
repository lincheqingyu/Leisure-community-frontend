import React from 'react'
import { Layout, Menu } from 'antd'
import { BellOutlined, MessageOutlined, MailOutlined } from '@ant-design/icons' // Import specific icons
import { Link } from 'react-router-dom'

import './Lettersider.css'

const { Sider } = Layout

const Lettersider = () => {
  return (
    <div>
      <Sider>
        <Menu
          mode="vertical"
          className="custom-menu">
          <Menu.Item key="Letter" icon={<BellOutlined />}>
            <Link to="/Letter" exact="true">官方</Link>
          </Menu.Item>
          <Menu.Item key="discussions" icon={<MessageOutlined />}>
            <Link to="/Letter/Discussion" exact="true">通知</Link>
          </Menu.Item>
          <Menu.Item key="privateletter" icon={<MailOutlined />}>
            <Link to="/Letter/Privateletter" exact="true">私信</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  )
}

export default Lettersider