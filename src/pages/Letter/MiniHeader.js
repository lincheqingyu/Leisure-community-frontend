import React from 'react'
import { Menu } from 'antd'
import './Miniheader.css'
import { Link } from 'react-router-dom'

const MiniHeader = () => {
  return (
    <div >
      <Menu mode="horizontal" className='miniheader'>
        <Menu.Item key="all">
          <Link to="/Letter" exact="true">全部</Link>
        </Menu.Item>
        <Menu.Item key="notice">
          <Link to="/Letter/Notice" exact="true">公告</Link>
        </Menu.Item>
        <Menu.Item key="examine">
          <Link to="/Letter/Examine" exact="true">审核</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default MiniHeader