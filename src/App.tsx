import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserInfo, toggleAuth } from './redux/actions/userActions';

import GameDetail from './components/GameDetail/GameDetail';
import CreateTeam from './components/CreateTeam/CreateTeam'
import Topbar from './components/Topbar/Topbar'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

import { Layout } from 'antd';
import TeamDetail from './components/TeamDetail/TeamDetail';

const { Content, Footer } = Layout;

function App() {
  const dispatch = useDispatch();

  const isAuth = async () => {
    const { data: userInfo } = await axios.get(`http://localhost:5000/users/info`, { withCredentials: true })

    dispatch(toggleAuth())
    dispatch(setUserInfo(userInfo.username, userInfo.id));
  }

  isAuth();

  return (
    <Router>
      <Layout>
        <Topbar/>

        <Content className="site-layout">
          
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <p>Register</p>
            </Route>

            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/games">
              <p>Games Page</p>
            </Route>
            <Route exact path="/tournaments">
              <p>Tournaments</p>
            </Route>
            <Route exact path="/leaderboards">
              <p>Leaderboards</p>
            </Route>
            <Route exact path="/games/:gameId">
              <GameDetail />
            </Route>
            <Route exact path="/ladders/:ladderId/teams/create">
              <CreateTeam />  
            </Route>
            <Route exact path="/teams/:teamId">
              <TeamDetail />  
            </Route>
          </Switch>
        
        
        </Content>

        <Footer style={{ textAlign: 'center' }}>Out Match Gaming ©2020 Created by Eddy Productions</Footer>
      </Layout>
    </Router>
  );
}

export default App;
