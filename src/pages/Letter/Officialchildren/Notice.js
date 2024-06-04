import React from 'react'
import Lettersider from '../Lettersider'
import { Layout } from 'antd'
import './Notice.css'
import MiniHeader from '../MiniHeader'
import Header from "@/components/Header/Header";


const { Sider, Content } = Layout
const Notice = () => {
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
            <img src={require('@/assets/images/letter/zanwuxiaoxi.png')} alt='暂无消息' />
          </div>
        </Content>


      </Layout>
    </div>
  )
}
export default Notice