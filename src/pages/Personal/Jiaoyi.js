import React from 'react'
import Header from '../../components/Header/Header'
import './Jiaoyi.css'
import Personalheader from './Personalheader'
import Personalsider from './Personalsider'

const Jiaoyi = () => {
  return (
    <div className='personal-all'>
      <Header />
      <Personalheader />
      <div className='person-down'>
        <div className='personal-sider'>
          <Personalsider />
        </div>
        <div className='main-content'>
          暂无~
        </div>

      </div>

    </div>
  )
}

export default Jiaoyi