import 'antd/dist/antd.css';
import './Topbar.css';
import React from 'react';

import { Link } from "react-router-dom";

import { Layout, Menu } from 'antd';

const {Header} = Layout;

function Topbar() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu className="menu" theme="dark" mode="horizontal">
      
        <Menu.Item key="1">
          <Link to="/games">
            Games
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/tournaments">
            Tournaments
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/leaderboards">
            Leaderboards
          </Link>
        </Menu.Item>

        <Menu.Item className="login" key="4">
          <Link to="/login">
            Login / Sign Up
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Topbar;