import 'antd/dist/antd.css';
import './Home.css';
import React from 'react';

import { Carousel } from 'antd';

import GamesHome from '../GamesHome/GamesHome';

function Home() {
  return (
    <div className="home-wrapper">
      <Carousel>
        <div className="splash" style={{ backgroundImage: `url("https://i.ibb.co/7Gb5k7G/splash1.jpg")` }}/>
        <div className="splash" style={{ backgroundImage: `url("https://i.ibb.co/7Gb5k7G/splash1.jpg")` }}/>
      </Carousel>
      <GamesHome/>
    </div>
  );
}

export default Home;