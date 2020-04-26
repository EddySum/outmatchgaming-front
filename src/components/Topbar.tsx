import 'antd/dist/antd.css';
import './Topbar.css';
import React from 'react';

import { Layout, Menu} from 'antd';

const {Header} = Layout;

function Topbar() {
  return (
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
  );
}

export default Topbar;