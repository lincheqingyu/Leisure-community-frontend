import React from 'react'
import './Notice.scss'

const Notice = () => {
  return (
    <div className='notice-main'>
      <img src={require('@/assets/images/letter/noletter.png')} alt='暂无联系人' />
    </div>
  )
}

export default Notice