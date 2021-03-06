import 'antd/dist/antd.css';
import './Topbar.css';
import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { IRootReducer } from "../../redux/IRootReducer";
import { useSelector } from "react-redux";

import { Layout, Menu } from 'antd';

const { Header } = Layout;
const { SubMenu } = Menu;

const GET_TEAMS_BY_PLAYER = gql`
  query GetTeamsByPlayer($playerId: ID!){
    getTeamsByPlayer(playerId: $playerId) {
      _id
      name
  }
}
`;

function Topbar() {
  const history = useHistory();
  const logout = async () => {
  
    await axios.post(`http://localhost:5000/users/logout`, {}, { withCredentials: true });

    // hard reload to ensure react state data is reset on logout
    window.location.reload(false);
  }

  const isAuthenticated: boolean = useSelector<IRootReducer, boolean>(
    state => state.userReducer.authenticated);

  const username: string | undefined = useSelector<IRootReducer, string | undefined>(
    state => state.userReducer.username);

  const userId: string | undefined = useSelector<IRootReducer, string | undefined>(
    state => state.userReducer.id);  

  const { data } = useQuery(GET_TEAMS_BY_PLAYER, { variables: { playerId: userId } });

  let teamsElem;
  if (data) {
    teamsElem = (
    <Menu.ItemGroup title="Teams">
        {data.getTeamsByPlayer.map(({ name, _id }: any) => (
          <Menu.Item onClick={() => {history.push(`/teams/${_id}`)}} key={`team:${_id}`}>{name}</Menu.Item>
        ))}
    </Menu.ItemGroup>
    )
  }

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
        {teamsElem}
        <Menu.Item key="option:1" onClick={logout}>Logout</Menu.Item>
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