import React from "react"
import "./DealRequest.scss"

const DealReques = () => {
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
                    <img className="bili-avatar-img" src={require("../../../assets/images/deal/Rectangle 01.jpg")} alt="用户头像" />
                  </div>
                </div>
              </div>

              <div className="content-wrap">
                {/* 用户名 */}
                <div className="fa-user-info">
                  <div className="user-name">安好安好</div>
                </div>
                {/* 评论时间 */}
                <div className='reply-time'>
                  <span className="reply-time">{'2023-11-11'}</span>
                </div>
                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">【求闲置】新学期开学求大二下课表课本，有闲置的学长学姐可以
                    <span className='reply-HL'>#联系方式13536824568（微信同号）</span></span>
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
                    <img className="bili-avatar-img" src={require("../../../assets/images/deal/Rectangle 01.jpg")} alt="用户头像" />
                  </div>
                </div>
              </div>

              <div className="content-wrap">
                {/* 用户名 */}
                <div className="fa-user-info">
                  <div className="user-name">安好安好</div>
                </div>
                {/* 评论时间 */}
                <div className='reply-time'>
                  <span className="reply-time">{'2023-11-11'}</span>
                </div>
                {/* 评论内容 */}
                <div className="root-reply">
                  <span className="reply-content">【求闲置】新学期开学求大二下课表课本，有闲置的学长学姐可以
                    <span className='reply-HL'>#联系方式13536824568（微信同号）</span></span>
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
      </div>
    </>
  )
}
export default DealReques