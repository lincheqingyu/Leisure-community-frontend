import React from 'react';
import { List, Avatar } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import './Record.scss';

const Record = () => {
  // 模拟的交易记录数据
  const records = [
    {
      id: 1,
      title: '购买二手教科书',
      amount: -50,
      date: '2023-09-15',
      status: '交易成功'
    },
    {
      id: 2,
      title: '出售旧笔记本电脑',
      amount: 1200,
      date: '2023-09-10',
      status: '交易成功'
    },
    {
      id: 3,
      title: '购买二手自行车',
      amount: -300,
      date: '2023-09-05',
      status: '交易成功'
    },
    {
      id: 4,
      title: '出售闲置手机',
      amount: 800,
      date: '2023-08-28',
      status: '交易成功'
    }
  ];

  return (
    <div className='record-all'>
      <div className='main-content'>
        <p>交易记录</p>
        <List
          itemLayout="horizontal"
          dataSource={records}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<ShoppingOutlined />} />}
                title={item.title}
                description={`日期: ${item.date} | 状态: ${item.status}`}
              />
              <div className={`amount ${item.amount > 0 ? 'income' : 'expense'}`}>
                {item.amount > 0 ? '+' : ''}{item.amount} 元
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Record;