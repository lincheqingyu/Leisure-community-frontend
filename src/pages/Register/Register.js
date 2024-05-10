import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Checkbox, Typography} from 'antd';
import {LockOutlined, UserOutlined, MehOutlined, SafetyOutlined} from '@ant-design/icons';

import './Register.scss';

const Register = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const [isSuccessMessageShown, setIsSuccessMessageShown] = useState(false);
    const { Text } = Typography;

    // 表单成功提交
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        setIsSuccessMessageShown(true);
    }

    useEffect(() => {
        if (isSuccessMessageShown) {
            messageApi.open({
                type: 'success',
                content: '获取成功',
            });
        }
    }, [isSuccessMessageShown, messageApi]);

    return (
        <div className='background-container'>
            <div className='register-container'>
                <div className='welcome-picture'>
                    <img src={require('@/assets/images/register/welcome.png')} className='welcome' alt=''/>
                </div>
                <div className='wrap-contain'>
                    <div className='shareCommunity'>
                        <img className='title' src={require("@/assets/images/register/Share Community.png")}
                             alt='闲享社群'/>
                        {/*<a href="/" type="primary">返回登录</a>*/}
                    </div>
                    <div className='register-content'>
                        <Form
                            form={form}
                            name="normal_login"
                            className="username-password"
                            validateTrigger='onBlur' //失焦验证
                            initialValues={{
                                remember: true,
                                username: '',
                                name: '',
                                password: '',
                                safePassword: ''
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item name="username" rules={[{
                                required: true,
                                message: '请输入您的用户名！'
                            }, {pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号！'}]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                            </Form.Item>
                            <Form.Item name='name' rules={[{require: true, message: "请输入您的昵称"}]}>
                                <Input prefix={<MehOutlined className="site-form-item-icon"/>} type='name'
                                       placeholder='Name'/>
                            </Form.Item>
                            <Form.Item name="password" rules={[{required: true, message: '请输入您的密码！'}]}>
                                <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                                       placeholder="Password"/>
                            </Form.Item>
                            <Form.Item name="password" rules={[{required: true, message: '请输入您验证码！'}]}>
                                <div className='Verification-code'>
                                    <Input prefix={<SafetyOutlined className="site-form-item-icon"/>} type="safePassword"
                                           placeholder="safePassword"/>
                                    {contextHolder}
                                    <Button className='button'
                                            onClick={() => setIsSuccessMessageShown(true)}>获取验证码</Button>
                                </div>
                            </Form.Item>
                        </Form>
                        <Form className='remember-forgot-container'>
                            <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
                            <a href="/">
                                <Button type="primary">返回登录</Button>
                            </a>
                        </Form>
                        <Form.Item className='text-content'>
                            <Checkbox />
                            <Text>我已经认真阅读并同意闲享社群的</Text>
                            <a href=''>《使用协议》</a>
                        </Form.Item>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
