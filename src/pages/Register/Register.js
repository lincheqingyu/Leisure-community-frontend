import React, {useEffect} from 'react'
import './Register.scss'
import {Button, Form, Input, Space, message} from 'antd'
import {LockOutlined, UserOutlined, MehOutlined, SafetyOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

const Register = () => {
    const [form] = Form.useForm()
    // 表单成功提交
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }
    const [messageApi, contextHolder] = message.useMessage()
    const success = useEffect(
        () => {
            messageApi.open({
                type: 'success',
                content: '获取成功',
            })
        }, [])
    return (
        <div className='background-container'>
            {/*<img className='pattern' src={require('@/assets/images/register/pattern.png')} alt=''/>*/}
            <div>
                <img src={require('@/assets/images/register/welcome.png')}
                     className='welcome'
                     alt=''
                ></img>
            </div>
            <div className='wrap-contain'>
                {/*<img src={require('@/assets/images/register/welcome.png')}*/}
                {/*     className='welcome'*/}
                {/*     alt=''*/}
                {/*></img>*/}
                <div className='center-contain'>
                    <div className='shareCommunity'>
                        <img className='title' src={require("@/assets/images/register/Share Community.png")} alt=''></img>
                        <div className='content'>
                            <Form
                                form={form}
                                name="normal_login"
                                className="username-password"
                                validateTrigger='onBlur'//失焦验证
                                initialValues={{
                                    remember: true,
                                    username: '',
                                    name: '',
                                    password: '',
                                    safePassworf: ''
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item>

                                </Form.Item>
                                <Form.Item
                                    name="username"//和后端接口名保持一致
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入您的用户名！',
                                        },
                                        {
                                            pattern: /^1[3-9]\d{9}$/,//匹配中国大陆地区的手机号
                                            message: '请输入正确的手机号！'
                                        }
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                           placeholder="Username"/>
                                </Form.Item>
                                <Form.Item
                                    name='name'
                                    rules={[
                                        {
                                            require: true,
                                            message: "请输入您的昵称"
                                        }
                                    ]}
                                >
                                    <Input
                                        prefix={<MehOutlined className="site-form-item-icon"/>}
                                        type='name'
                                        placeholder='Name'
                                    ></Input>
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
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入您验证码！',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<SafetyOutlined className="site-form-item-icon"/>}
                                        type="safePassword"
                                        placeholder="safePassword"
                                    />
                                    <br></br>
                                    <br></br>
                                    <Space>
                                        {contextHolder}
                                        <Button onClick={success}>获取验证码</Button>
                                    </Space>

                                </Form.Item>
                            </Form>
                            <Form className='remember-forgot-container'>
                                <Link to="/" className="login-form-forgot">
                                    返回登录
                                </Link>
                            </Form>
                            <Form className='button'>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button ">
                                        注册
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register