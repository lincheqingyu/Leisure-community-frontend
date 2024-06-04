import React from 'react'
import Header from '../../components/Header/Header'
import Lettersider from './Lettersider'
import { Layout } from 'antd'

import './Privateletter.css'

const { Sider, Content } = Layout

const PrivateLetter = () => {
  return (
    <div className='letter-all'>
      <Header />
      <h1>消息中心</h1>
      <Layout className="all">
        <Sider>
          <Lettersider />
        </Sider>
        <Content>
          <div className='privateletter-content'>
            <div className='privateletter-left'>
              <div className='left-up'>
                <p>最近联系</p>
              </div>
              <div className='left-down'>
                <img src={require('../../assets/images/letter/privateletterzanwu.png')} alt='暂无联系人' />
              </div>
            </div>
            <div className='privateletter-right'>
              <div className='right-up'>

              </div>
              <div className='right-down'>

              </div>
            </div>
          </div>

        </Content>


      </Layout>
    </div>
  )
}

export default PrivateLetter