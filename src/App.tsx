import './App.css';
import 'antd/dist/antd.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Topbar from './components/Topbar/Topbar'
import Login from './components/Auth/Login'

import { Layout } from 'antd';

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Topbar/>

        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <p>Register</p>
            </Route>

            <Route path="/home">
              <p>Home</p>
            </Route>
            <Route path="/games">
              <p>Games Page</p>
            </Route>
            <Route path="/tournaments">
              <p>Tournaments</p>
            </Route>
            <Route path="/leaderboards">
              <p>Leaderboards</p>
            </Route>
          </Switch>
        
        
        </Content>

        <Footer style={{ textAlign: 'center' }}>Out Match Gaming ©2018 Created by Eddy Productions</Footer>
      </Layout>
    </Router>
  );
}

export default App;
