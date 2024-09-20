/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-06-07 14:51:57
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-07 15:01:41
 * @FilePath: \new_code_1d:\日常小软件\WeChat Files\新建文件夹\WeChat Files\wxid_mveuc1a21drc22\FileStorage\File\2024-06\Leisure-community-main\Leisure-community-main\src\pages\Forum\FA\FA.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import './FA.scss'
import avatar from '@/assets/images/user/bozai.png'
const FA = () => {

  return (
    <div className='back-color'>
      <div className="app">
        <div className="reply-wrap">
          {/* 评论项 */}
          <div className="reply-item">
            {/* 头像 */}
            <div className="root-reply-avatar">
              {/* 当前用户头像 */}
              <div className="reply-box-avatar">
                <div className="bili-avatar">
                  <img className="bili-avatar-img" src={avatar} alt="用户头像" />
                </div>
              </div>
            </div>

            <div className="content-wrap">
              {/* 用户名和时间 */}
              <div className="fa-user-info">
                <div className="user-name">夜冰</div>
                <div className='reply-time'>
                  <span className="reply-time">{'2023-11-11'}</span>
                </div>
              </div>
              {/* 评论内容 */}
              <div className="root-reply">
                <span className="reply-content">小狗不知道什么叫死亡，它只知道自己的好朋友怎么都叫不醒了</span>
                <div className="reply-img">
                  <img className='replyImg' src={require("@/assets/images/pictures/Rectangle 141.png")} alt="配图" />
                  <img className='replyImg' src={require("@/assets/images/pictures/Rectangle 142.png")} alt="配图" />
                  <img className='replyImg' src={require("@/assets/images/pictures/Rectangle 143.png")} alt="配图" />
                </div>
                <div className="reply-info">
                  {/* 评论数量 */}
                  <span className="delete-btn">收藏:{100}</span>
                  <span className="delete-btn">点赞数:{100}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app">
        <div className="reply-wrap">

          {/* 评论项 */}
          <div className="reply-item">
            {/* 头像 */}
            <div className="root-reply-avatar">
              {/* 当前用户头像 */}
              <div className="reply-box-avatar">
                <div className="bili-avatar">
                  <img className="bili-avatar-img" src={avatar} alt="用户头像" />
                </div>
              </div>
            </div>

            <div className="content-wrap">
              {/* 用户名 */}
              <div className="fa-user-info">
                <div className="user-name">夜冰</div>
              </div>
              {/* 评论时间 */}
              <div className='reply-time'>
                <span className="reply-time">{'2023-11-11'}</span>
              </div>
              {/* 评论内容 */}
              <div className="root-reply">
                <span className="reply-content">小狗不知道什么叫死亡，它只知道自己的好朋友怎么都叫不醒了</span>
                <div className="reply-img">
                  <img className='replyImg' src={require("@/assets/images/pictures/Rectangle 141.png")} alt="配图" />
                  <img className='replyImg' src={require("@/assets/images/pictures/Rectangle 142.png")} alt="配图" />
                  <img className='replyImg' src={require("@/assets/images/pictures/Rectangle 143.png")} alt="配图" />
                </div>
                <div className="reply-info">
                  {/* 评论数量 */}
                  <span className="delete-btn">收藏:{100}</span>
                  <span className="delete-btn">点赞数:{100}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FA