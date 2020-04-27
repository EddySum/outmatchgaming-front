import 'antd/dist/antd.css';
import './Topbar.css';
import React from 'react';

import { Link } from 'react-router-dom';

import { IRootReducer } from "../../redux/IRootReducer";
import { useSelector } from "react-redux";

import { Layout, Menu } from 'antd';

const { Header } = Layout;

function Topbar() {
  const isAuthenticated: boolean = useSelector<IRootReducer, boolean>(
    state => state.userReducer.authenticated);

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
      <Menu.Item className="user-profile" key="4">
        User Profile
      </Menu.Item>
    )
  }

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

        {userProfile}

      </Menu>
    </Header>
  );
}

export default Topbar;