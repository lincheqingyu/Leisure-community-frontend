import React, {useEffect, useState} from 'react';
import './UserInfo.scss'
import {Button, Descriptions} from "antd";
import {Link} from "react-router-dom";
const UserInfo = () => {

    const [school, setSchool] = useState('');

    useEffect(() => {
        // 使用fetch或者axios等方法从后端获取学校数据
        fetch('http://127.0.0.1:4523/m1/3290659-0-default/login')
            .then(response => response.json())
            .then(data => setSchool(data.school));
    }, []);

    const items = [
        {
            key: '1',
            label: '昵称',
            children: '叶冰',
        },
        {
            key: '2',
            label: '等级',
            children: 'LV2',
        },
        {
            key: '3',
            label: '学校',
            //children: '南京|南京理工大学紫金学院',
            children: school,
        },
        {
            key: '4',
            label: '粉丝',
            children: '01234567891234567890123456789',
        },
        {
            key: '5',
            label: '关注',
            children: '0',
        },
        {
            key: '6',
            label: '收藏',
            children: '0',
        },
    ];

    return (
        <div className="user-container">
            <img src={require('@/assets/images/user/user-avatar.png')} alt='个人头像'/>
            <div className='content'>
                <Descriptions layout="vertical"
                              className="custom-descriptions"
                              theme={{
                                  components: {
                                      Descriptions: {
                                          /* 这里是你的组件 token */
                                          //itemPaddingBottom: '6px',
                                      },
                                  },
                              }}
                >
                    {items.map(item => (
                        <Descriptions.Item key={item.label} className="custom-item">
                            <span className="label">{item.label}: </span>
                            <span >{item.children}</span>
                        </Descriptions.Item>
                    ))}
                </Descriptions>

                {/*<Descriptions*/}
                {/*    className='user-content'*/}
                {/*    items={items}*/}
                {/*    // theme={{*/}
                {/*    //     components: {*/}
                {/*    //         Descriptions: {*/}
                {/*    //             */}
                {/*    //             colonMarginRight:'20px',	//冒号右间距*/}
                {/*    //         },*/}
                {/*    //     },*/}
                {/*    // }}*/}
                {/*    contentStyle={{*/}
                {/*        fontSize: '16px',*/}
                {/*        // itemPaddingBottom:'10px',*/}
                {/*        // colonMarginRight:'10px',*/}
                {/*        //lineHeight:'2',	//文本行高*/}
                {/*        display:"flex",*/}
                {/*        flex:'row',*/}
                {/*        alignItems:'center',*/}
                {/*    }}*/}
                {/*/>*/}
            </div>
            <div className='UserHome-editButton'>
                {/*<Button type="primary" className="edit-button">修改信息</Button>*/}
                <Link to="/UserHome"> {/* 使用 Link 组件包裹按钮 */}
                    <Button type="primary">修改信息</Button>
                </Link>
            </div>
        </div>
    );
};

export default UserInfo;