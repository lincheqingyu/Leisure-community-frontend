import React from 'react'
import './Comment.scss'


const Comment = () => {
  return (
    <div className='comment-main'>
      <img src={require('@/assets/images/letter/noletter.png')} alt='暂无联系人' />
    </div>
  )
}

export default Comment