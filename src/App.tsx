import './App.css';
import 'antd/dist/antd.css';
import React from 'react';

import Topbar from './components/Topbar'
import Login from './components/Auth/Login'

import { Layout } from 'antd';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Topbar/>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Login></Login>
      
      
      </Content>

      <Footer style={{ textAlign: 'center' }}>Out Match Gaming ©2018 Created by Eddy Productions</Footer>
    </Layout>
  );
}

export default App;
