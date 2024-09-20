import React from 'react'
import { Layout } from 'antd'
import './Privateletter.scss'

const Privateletter = () => {
  return (
    <div className='privateletter-content'>
      <div className='privateletter-left'>
        <div className='left-up'>
          <p>最近联系</p>
        </div>
        <div className='left-down'>
          <img src={require('@/assets/images/letter/noletter.png')} alt='暂无联系人' />
        </div>
      </div>
      <div className='privateletter-right'>
        <div className='right-up'>

        </div>
        <div className='right-down'>

        </div>
      </div>
    </div>
  )
}

export default Privateletter
