import React from 'react'
import './Collect.scss'
import { LikeOutlined } from '@ant-design/icons'

const Collect = () => {
  return (
    <div className='collect-all'>
      <div className='main-content1'>
        <div className='collect1'>
          <img src={require('../../../assets/images/personal/collect1.png')} alt='收藏1' />
          <div className='collect-content'>免费高清素材网站分享|九个宝藏网站</div>
          <div className='collect-footer'>
            <img src={require('../../../assets/images/personal/collectheadlike1.png')} alt='收藏头像1' />
            <div className='publish-person'>设计师阿享</div>
            <div className='like'><LikeOutlined />140</div>
          </div>
        </div>

        <div className='collect2'>
          <img src={require('../../../assets/images/personal/collect2.png')} alt='收藏2' />
          <div className='collect-content'>网站首页如何设计？这次帮你全部理清！</div>
          <div className='collect-footer'>
            <img src={require('../../../assets/images/personal/collectheadlike2.png')} alt='收藏头像2' />
            <div className='publish-person'>小红薯</div>
            <div className='like'><LikeOutlined />17</div>
          </div>
        </div>


        <div className='collect3'>
          <img src={require('../../../assets/images/personal/collect3.png')} alt='收藏3' />
          <div className='collect-content'>记住这些规范，不用脑也可以做设计了</div>
          <div className='collect-footer'>
            <img src={require('../../../assets/images/personal/collectheadlike3.png')} alt='收藏头像3' />
            <div className='publish-person'>不会设计的设计师</div>
            <div className='like'><LikeOutlined />225</div>
          </div>
        </div>

        <div className='collect4'>
          <img src={require('../../../assets/images/personal/collect4.png')} alt='收藏4' />
          <div className='collect-content'>太简单了！只需三步，轻松设计,快来学习</div>
          <div className='collect-footer'>
            <img src={require('../../../assets/images/personal/collectheadlike4.png')} alt='收藏头像4' />
            <div className='publish-person'>大可</div>
            <div className='like'><LikeOutlined />628</div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Collect
