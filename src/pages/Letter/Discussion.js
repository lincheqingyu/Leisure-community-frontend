import React from 'react'
import Header from '../../components/Header/Header'
import Lettersider from './Lettersider'
import { Layout, Menu } from 'antd'
import './Discussion.css'
import { Link } from 'react-router-dom'


const { Sider, Content } = Layout

const Discussion = () => {
  return (
    <div className='letter-all'>
      <Header />
      <h1>消息中心</h1>
      <Layout className="all">
        <Sider>
          <Lettersider />
        </Sider>
        <Content>
          <Menu mode="horizontal"
            className="miniheader"
            defaultSelectedKeys={['View']}>
            <Menu.Item key="View">
              <Link to="/Letter/Discussion" exact="true">评论</Link>
            </Menu.Item>
          </Menu>
          <div className='letter-content'>
            <img src={require('../../assets/images/letter/zanwuxiaoxi.png')} alt='暂无消息' />
          </div>
        </Content>


      </Layout>
    </div>
  )
}

export default Discussion

