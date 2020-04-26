import './App.css';
import 'antd/dist/antd.css';
import React from 'react';

import Topbar from './components/Topbar'




import { Layout, Menu} from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Topbar/>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      
      
      
      </Content>

      <Footer style={{ textAlign: 'center' }}>Out Match Gaming ©2018 Created by Eddy Productions</Footer>
    </Layout>
  );
}

export default App;
