//导航栏
import React from "react";
import './Header.scss'
import Logo from "@/components/Logo/Logo";
import {Dropdown, Menu} from "antd";
import {DownOutlined, LogoutOutlined} from "@ant-design/icons";

const items = [
    {
        key: 'logout',
        icon:<LogoutOutlined/>,
        label: (
            <a href="/">退出</a>
        ),
    },
];

const Header = () => {
    return (
        <div className='container'>
            <div className='background'>
                <div className='stars'>
                    <img className='star-1' src={require('@/assets/images/header/stars.png')} alt='star-1'/>
                    <img className='star-2' src={require('@/assets/images/header/stars.png')} alt='star-2'/>
                    <img className='star-3' src={require('@/assets/images/header/stars.png')} alt='star-3'/>
                    <img className='star-4' src={require('@/assets/images/header/stars.png')} alt='star-4'/>
                </div>
                <div className='text'>
                    <div style={{paddingLeft: '5%'}}>
                        <Logo/>
                    </div>
                    <div style={{position: 'absolute', bottom: '10px', right: '60px'}}>
                        <Menu mode="horizontal" className="menu-horizontal" >
                            {/*<Menu.Item key="first">*/}
                            {/*    <a href='/layout' className="menu-link">首页</a>*/}
                            {/*</Menu.Item>*/}
                            <Menu.Item key="forum">
                                <a href='/forum' className="menu-link">校园论坛</a>
                            </Menu.Item>
                            <Menu.Item key="deal">
                                <a href='/Deal' className="menu-link">闲置交易</a>
                            </Menu.Item>
                            <Menu.Item key="publish">
                                <a href='/Publish'>
                                    <img className='header-picture1' src={require('@/assets/images/header/publish.png')}
                                         alt="publish"/>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="letter">
                                <a href="/Letter">
                                    <img className='header-picture2' src={require('@/assets/images/header/letter.png')}
                                         alt="letter"/>
                                </a>
                            </Menu.Item>
                            <Menu.Item key="userhome">
                                <a href="/UserHome">
                                    <img className='header-picture3'
                                         src={require('@/assets/images/header/personal.png')} alt="personal"/>
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <DownOutlined/>
                                    </a>
                                </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;