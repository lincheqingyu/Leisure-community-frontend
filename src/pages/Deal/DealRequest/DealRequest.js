import React, { useState } from "react"
import { LikeOutlined, CommentOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import "./DealRequest.scss"

const DealRequest = () => {
  const [requestItems, setRequestItems] = useState([
    {
      id: 1,
      username: "安好安好",
      avatar: require("../../../assets/images/deal/Rectangle 01.jpg"),
      time: "2023-11-11",
      content: "【求闲置】新学期开学求大二下课表课本，有闲置的学长学姐可以",
      contact: "#联系方式13536824568（微信同号）",
      image: require("../../../assets/images/deal/Rectangle 80.png"),
      likes: 100,
      comments: 100
    },
    {
      id: 2,
      username: "学习达人",
      avatar: require("../../../assets/images/deal/Rectangle 01.jpg"), // 请确保这个图片文件存在
      time: "2023-11-12",
      content: "【求闲置】求购二手笔记本电脑，最好是轻薄本，适合日常办公和学习使用",
      contact: "#联系方式：18812345678（微信同号）",
      image: require("../../../assets/images/deal/Rectangle 80.png"), // 请确保这个图片文件存在
      likes: 100,
      comments: 100
    }
  ]);

  const handleLike = (id) => {
    setRequestItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const handleComment = (id) => {
    setRequestItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, comments: item.comments + 1 } : item
      )
    );
  };

  return (
    <div className='wrap-inside'>
      {requestItems.map((item) => (
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
                    <img className='replyImg' src={item.image} alt="请求图片" />
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

export default DealRequest