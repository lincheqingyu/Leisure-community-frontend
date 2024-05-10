import React from 'react'
import Header from '../../components/Header/Header'
import './Personal.css'
import Personalheader from './Personalheader'
import Personalsider from './Personalsider'
import {LikeOutlined} from '@ant-design/icons'

const Personal = () => {
    return (
        <div className='personal-all'>
            <Header/>
            <Personalheader/>
            <div className='person-down'>
                <div className='personal-sider'>
                    <Personalsider/>
                </div>
                <div className='main-content1'>
                    <div className='shoucang1'>
                        <img src={require('../../assets/images/personal/shoucang1.png')} alt='收藏1'/>
                        <div className='shoucang-content'>免费高清素材网站分享|九个宝藏网站</div>
                        <div className='shoucang-footer'>
                            <img src={require('../../assets/images/personal/shoucangheadlike1.png')} alt='收藏头像1'/>
                            <div className='faburen'>设计师阿享</div>
                            <div className='dianzan'><LikeOutlined/>140</div>
                        </div>
                    </div>

                    <div className='shoucang2'>
                        <img src={require('../../assets/images/personal/shoucang2.png')} alt='收藏2'/>
                        <div className='shoucang-content'>网站首页如何设计？这次帮你全部理清！</div>
                        <div className='shoucang-footer'>
                            <img src={require('../../assets/images/personal/shoucangheadlike2.png')} alt='收藏头像2'/>
                            <div className='faburen'>小红薯</div>
                            <div className='dianzan'><LikeOutlined/>17</div>
                        </div>
                    </div>


                    <div className='shoucang3'>
                        <img src={require('../../assets/images/personal/shoucang3.png')} alt='收藏3'/>
                        <div className='shoucang-content'>记住这些规范，不用脑也可以做设计了</div>
                        <div className='shoucang-footer'>
                            <img src={require('../../assets/images/personal/shoucangheadlike3.png')} alt='收藏头像3'/>
                            <div className='faburen'>不会设计的设计师</div>
                            <div className='dianzan'><LikeOutlined/>225</div>
                        </div>
                    </div>

                    <div className='shoucang4'>
                        <img src={require('../../assets/images/personal/shoucang4.png')} alt='收藏4'/>
                        <div className='shoucang-content'>太简单了！只需三步，轻松设计,快来学习</div>
                        <div className='shoucang-footer'>
                            <img src={require('../../assets/images/personal/shoucangheadlike4.png')} alt='收藏头像4'/>
                            <div className='faburen'>大可</div>
                            <div className='dianzan'><LikeOutlined/>628</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal



