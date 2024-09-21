import React, { useState } from 'react';
import {Button, Checkbox, Form, Input, message} from 'antd';
import { LockOutlined, UserOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './Login.scss'
import Logo from "@/components/Logo/Logo";
import {useDispatch} from 'react-redux'
import {fetchLogin} from '@/store/modules/user'
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [form] = Form.useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const dispatch= useDispatch()

    const navigate = useNavigate()

    // 表单成功提交
    const onFinish = async (values) => {
        console.log('表单提交的值: ', values);
        try {
            const response = await dispatch(fetchLogin(values));
            
            console.log('response: ', response);
            if (response.status === 200) {
                // 登录成功
                navigate('/forum');
                // 打印后端返回的完整数据
                console.log('登录成功，后端返回数据:', response.data);
                
                // 显示成功消息
                if (typeof response.data === 'string') {
                    message.success(response.data);
                } else if (response.data && response.data.user) {
                    message.success(`欢迎回来，${response.data.user.nickname || response.data.user.username}`);
                } else {
                    message.success('登录成功');
                }
                
                // 如果需要，您还可以打印特定的字段
                if (response.data && response.data.token) {
                    console.log('Token:', response.data.token);
                }
                if (response.data && response.data.user) {
                    console.log('用户信息:', response.data.user);
                }
            } else {
                // 登录失败
                message.error(`${response.status} ${response.data}`);
            }
        } catch (error) {
            // 处理网络错误或其他未预期的错误
            message.error('登录失败，请稍后再试');
            console.error('登录错误:', error);
        }
    };

    return (
        <div className='container'>
            <div className='picture'>
                <img className='login-picture' src={require('@/assets/images/login/login.png')} alt="design"/>
            </div>
            <div className='login'>
                <Logo />
                <div className='login-content'>
                    <Form
                        form={form}
                        name="normal_login"
                        className="username-password"
                        validateTrigger='onBlur'//失焦验证
                        initialValues={{
                            remember: true,
                            username:'',
                            password:''
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item>
                            <h1>Login to Share Community</h1>
                        </Form.Item>
                        <Form.Item
                            name="username"//和后端接口名保持一致
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的用户名！',
                                },
                                // {
                                //     pattern:/^1[3-9]\d{9}$/,//匹配中国大陆地区的手机号
                                //     message:'请输入正确的手机号！'
                                // }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码！',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="密码"
                                suffix={
                                    <span onClick={() => setPasswordVisible(!passwordVisible)}>
                                        {passwordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                    </span>
                                }
                            />
                        </Form.Item>
                        <div className='remember-forgot-container'>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>保存密码</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="/register">
                                忘记密码？
                            </a>
                        </div>
                        <Form.Item className='login-button'>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                <div>登</div>
                                <div>录</div>
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className='link'>
                    <Form.Item>
                        <a href="/register">{'还未拥有账号？点击注册>>'}</a>
                    </Form.Item>
                </div>
            </div>
        </div>
    )
};

export default Login;
