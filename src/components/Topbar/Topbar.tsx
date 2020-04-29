import 'antd/dist/antd.css';
import './Topbar.css';
import React from 'react';

import { Link } from 'react-router-dom';

import { IRootReducer } from "../../redux/IRootReducer";
import { useSelector } from "react-redux";

import { Layout, Menu } from 'antd';

const { Header } = Layout;
const { SubMenu } = Menu;

function Topbar() {
  const isAuthenticated: boolean = useSelector<IRootReducer, boolean>(
    state => state.userReducer.authenticated);

  const username: string | undefined = useSelector<IRootReducer, string | undefined>(
    state => state.userReducer.username);

  let userProfile;

  if (!isAuthenticated) {
    userProfile = (
      <Menu.Item className="user-profile" key="4">
        <Link to="/login">
          Login / Sign Up
        </Link>
      </Menu.Item>
    )
  } else {
    userProfile = ( 
      <SubMenu className="user-profile" title={username}>
          <Menu.Item key="option:1">Logout</Menu.Item>
        </SubMenu>
    )
  }

  return (
    <Header className="header">
      <Link to="/">
        <div className="logo" />
      </Link>

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

        {userProfile}

      </Menu>
    </Header>
  );
}

export default Topbar;