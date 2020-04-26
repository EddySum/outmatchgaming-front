import 'antd/dist/antd.css';
import './Login.css';
import React from 'react';

import { Form, Input, Button, Typography } from 'antd';
import { Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Text, Title } = Typography 

function Login() {
  const onFinish = ({username, password}: any) => {
    console.log('Username received', username);
  };

  return (
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
      >
        <Row justify="center">
          <Title level={3}>Sign In</Title>
        </Row>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please Enter Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please Enter Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
     
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>

        <Row justify="center">
          <Text>Not Signed up? <a href="">register now!</a></Text>
        </Row>
      </Form>
  );
}

export default Login