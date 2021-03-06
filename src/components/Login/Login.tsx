import 'antd/dist/antd.css';
import './Login.css';
import React from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserInfo, toggleAuth } from '../../redux/actions/userActions';

import { Form, Input, Button, Typography } from 'antd';
import { Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const { Text, Title } = Typography 

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = async ({email, password}: any) => {
    const body = {
      fullEmail: email, 
      password
    }

    await axios.post(`http://localhost:5000/users/login`, body, { withCredentials: true });

    const { data: userInfo } = await axios.get(`http://localhost:5000/users/info`, { withCredentials: true })

    dispatch(toggleAuth())
    dispatch(setUserInfo(userInfo.username, userInfo.id));
    history.push("/");
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
          name="email"
          rules={[{ required: true, message: 'Please Enter Email!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
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
          <Text>
            Not Signed up? <Link to="/register">
              register now!
            </Link>
          </Text>
        </Row>
      </Form>
  );
}

export default Login