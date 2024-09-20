import React, { useState } from 'react';
import {Button, Form, Input, message, Checkbox, Typography, Flex} from 'antd';
import {LockOutlined, UserOutlined, MehOutlined, SafetyOutlined, EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '@/store/modules/user';
import {useNavigate} from 'react-router-dom';
import './Register.scss';

const Register = () => {
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    const {Text} = Typography;
    const [passwordVisible, setPasswordVisible] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading} = useSelector(state => state.user);

    // 表单成功提交
    const onFinish = async (values) => {
        console.log('表单提交的值: ', values);
        try {
            await dispatch(register(values));
            messageApi.open({
                type: 'success',
                content: '注册成功！',
            });
            navigate('/');
        } catch (error) {
            console.error('注册出错:', error.message||error);
            let errorMessage = '注册失败，请稍后再试。';
            if (typeof error === 'string') {
                errorMessage = error;
            } else if (error.message) {
                errorMessage = error.message;
            } else if (error instanceof Error) {
                errorMessage = error.toString();
            }
            //console.error('注册失败：', errorMessage); // 打印错误信息到控制台
            messageApi.open({
                type: 'error',
                content: errorMessage,
            });
        }
    }

    return (
        <div className='background-container'>
            {contextHolder}
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
                    <Form
                        form={form}
                        name="normal_login"
                        className="register-form"
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
                        <Form.Item name="telephone" rules={[{
                            required: true,
                            message: '请输入您的手机号！'
                        }, {pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号！'}]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="telephone"/>
                        </Form.Item>
                        <Form.Item name='username' rules={[{require: true, message: "请输入您的昵称"}]}>
                            <Input prefix={<MehOutlined className="site-form-item-icon"/>} type='name'
                                   placeholder='username'/>
                        </Form.Item>
                        <Form.Item name="password" rules={[{required: true, message: '请输入您的密码！'}]}>
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
                        <Form.Item name="verificationCode">
                            <Flex justify="space-between" gap={20}>
                                <Input prefix={<SafetyOutlined className="site-form-item-icon"/>}
                                       type="safePassword"
                                       placeholder="safePassword"/>
                                {/*<Form.Item name="Verification-code">*/}
                                {/*    */}
                                {/*</Form.Item>*/}
                                <Button className="vcode-btn">获取验证码</Button>
                            </Flex>
                        </Form.Item>

                        <Form.Item name='remember-forgot-container'>
                            <Flex justify="space-between">
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        loading={isLoading}>注册</Button>
                                <a href="/">
                                    <Button type="primary" onClick={() => navigate('/')}>返回登录</Button>
                                </a>
                            </Flex>
                        </Form.Item>
                        <Form.Item className='text-content'>
                            <Checkbox/>
                            <Text>我已经认真阅读并同意闲享社群的</Text>
                            <a href='/'>《使用协议》</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Register;
