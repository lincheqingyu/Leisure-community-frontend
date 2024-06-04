import React from "react"
import avatar from '../../../assets/images/deal/bozai.png'
import "./DealRecommend.css"
const DealRecommend = () => {
  return (
    <>
      <div className='wrap-inside'>
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
                <div className="user-info">
                  <div className="user-name">夜冰</div>
                </div>
                {/* 评论时间 */}
                <div className='reply-time'>
                  <span className="reply-time">{'2023-11-11'}</span>
                </div>
                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">【出闲置】大学毕业，书本闲置，欢迎学弟学妹们前来购买
                    <span className='reply-HL'>#联系方式18951167345</span></span>
                  <div className="reply-img">
                    <img className='replyImg'
                      src={require("../../../assets/images/deal/Rectangle 80.png")}></img>
                  </div>
                  <div className="reply-info">
                    {/* 评论数量 */}
                    <span className="delete-btn">
                      本平台仅提供信息，所有交易均为线下面交，请谨慎辨别
                    </span>
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
                <div className="user-info">
                  <div className="user-name">夜冰</div>
                </div>
                {/* 评论时间 */}
                <div className='reply-time'>
                  <span className="reply-time">{'2023-11-11'}</span>
                </div>
                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">【出闲置】珂润面霜双十一买多了用不完，临期出了，保真，
                    有淘宝交易截图记录
                    <span className='reply-HL'>#联系方式18951167345</span></span>
                  <div className="reply-img">
                    <img className='replyImg'
                      src={require("../../../assets/images/deal/Rectangle 159.png")}></img>
                  </div>
                  <div className="reply-info">
                    {/* 评论数量 */}
                    <span className="delete-btn">
                      本平台仅提供信息，所有交易均为线下面交，请谨慎辨别
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default DealRecommend 