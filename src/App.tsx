import 'antd/dist/antd.css';
import React from 'react';
import './App.css';

import { Layout, Menu} from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu className="menu" theme="dark" mode="horizontal">
          <Menu.Item key="1">Games</Menu.Item>
          <Menu.Item key="2">Tournaments</Menu.Item>
          <Menu.Item key="3">Leaderboards</Menu.Item>

          <Menu.Item className="login" key="4">
            <a href="http://localhost:3000/login">
              Login / Sign Up
            </a>
            </Menu.Item>
        </Menu>
      
        
      </Header>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      
      
      
      </Content>

      <Footer style={{ textAlign: 'center' }}>Out Match Gaming ©2018 Created by Eddy Productions</Footer>
    </Layout>
  );
}

export default App;
