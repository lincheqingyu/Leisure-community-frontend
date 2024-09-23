import React, { useState } from "react"
import { LikeOutlined, CommentOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import avatar from '../../../assets/images/deal/avatar.png'
import "./DealRecommend.scss"

const DealRecommend = () => {
  const [recommendItems, setRecommendItems] = useState([
    {
      id: 1,
      username: "夜冰",
      avatar: avatar,
      time: "2023-11-11",
      content: "【出闲置】大学毕业，书本闲置，欢迎学弟学妹们前来购买",
      contact: "#联系方式18951167345",
      image: require("../../../assets/images/deal/Rectangle 80.png"),
      likes: 100,
      comments: 100
    },
    {
      id: 2,
      username: "夜冰",
      avatar: avatar,
      time: "2023-11-11",
      content: "【出闲置】珂润面霜双十一买多了用不完，临期出了，保真，有淘宝交易截图记录",
      contact: "#联系方式18951167345",
      image: require("../../../assets/images/deal/Rectangle 159.png"),
      likes: 100,
      comments: 100
    }
  ]);

  const handleLike = (id) => {
    setRecommendItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const handleComment = (id) => {
    setRecommendItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, comments: item.comments + 1 } : item
      )
    );
  };

  return (
    <div className='wrap-inside'>
      {recommendItems.map((item) => (
        <div className="deal-content" key={item.id}>
          <div className="reply-wrap">
            <div className="reply-item">
              <div className="root-reply-avatar">
                <div className="reply-box-avatar">
                  <div className="bili-avatar">
                    <img className="bili-avatar-img" src={item.avatar} alt="用户头像" />
                  </div>
                </div>
              </div>

              <div className="content-wrap">
                <div className="fa-user-info">
                  <div className="user-name">{item.username}</div>
                </div>
                <div className='reply-time'>
                  <span>{item.time}</span>
                </div>
                <div className="root-reply">
                  <span className="reply-content">
                    {item.content}
                    <span className='reply-HL'>{item.contact}</span>
                  </span>
                  <div className="reply-img">
                    <img className='replyImg' src={item.image} alt="推荐图片" />
                  </div>
                  <div className="reply-info">
                    <span className="delete-btn">
                      本平台仅提供信息，所有交易均为线下面交，请谨慎辨别
                    </span>
                    <div className="interaction-buttons">
                      <Button 
                        type="text" 
                        onClick={() => handleLike(item.id)}
                      >
                        <Space>
                          <LikeOutlined />
                          {item.likes}
                        </Space>
                      </Button>
                      <Button 
                        type="text" 
                        onClick={() => handleComment(item.id)}
                      >
                        <Space>
                          <CommentOutlined />
                          {item.comments}
                        </Space>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DealRecommend