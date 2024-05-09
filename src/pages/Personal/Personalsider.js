import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

import './Personalsider.css'

const { Sider } = Layout

const Lettersider = () => {
  return (
    <div>
      <Sider>
        <Menu
          mode="vertical"
          className="custom-menu2">
          <Menu.Item key="Person">
            <Link to="/Personal" exact="true">个人收藏</Link>
          </Menu.Item>
          <Menu.Item key="Jiaoyi">
            <Link to="/Personal/Jiaoyi" exact="true">交易记录</Link>
          </Menu.Item>
          <Menu.Item key="Shiming">
            <Link to="/Personal/Shiming" exact="true">实名认证</Link>
          </Menu.Item>
          <Menu.Item key="Zhanghao">
            <Link to="/Personal/Zhanghao" exact="true">账号管理</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  )
}

export default Lettersider