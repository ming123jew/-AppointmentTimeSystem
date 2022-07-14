import React from "react"
import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import {useNavigate} from "react-router-dom"
import { useStore } from '../store/'

const LoginForm = ()=>{
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinish = async (values) => {
    const {mobile, code} = values
    console.log('Received values of form: ', values);
    try {
      await loginStore.login({ mobile, code })
      navigate('/')
    } catch (err) {
      message.error( '登录失败')
    }
  };

  return (
    <div className="login-div">
      <div className="login-form-title"><h3>预约系统</h3></div>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
  );
}

export default LoginForm;