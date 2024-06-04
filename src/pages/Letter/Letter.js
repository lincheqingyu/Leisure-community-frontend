import React from 'react'
import Header from '../../components/Header/Header'
import Lettersider from './Lettersider'
import { Layout } from 'antd'
import './Letter.css'
import MiniHeader from './MiniHeader'


const { Sider, Content } = Layout
const Letter = () => {
  return (
    <div className='letter-all'>
      <Header />
      <h1>消息中心</h1>
      <Layout className="all">
        <Sider>
          <Lettersider />
        </Sider>
        <Content>
          <div>
            <MiniHeader />
          </div>

          <div className='letter-content'>
            <img src={require('../../assets/images/letter/zanwuxiaoxi.png')} alt='暂无消息' />
          </div>
        </Content>


      </Layout>
    </div>
  )
}

export default Letter