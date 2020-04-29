import 'antd/dist/antd.css';
import './GamesHome.css';
import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const GET_GAMES = gql`
  query {	
    getGames {
      _id
      name
      platform
    }
  }
`;

const getGameImage = (gameName: string) => {
  if (gameName === 'Modern Warfare 2019') {
    return require('../../assets/modern_warfare.png')
  } else if (gameName === 'Black Ops 2') {
    return require('../../assets/black_ops_2.png')
  } else if (gameName === 'Valorant') {
    return require('../../assets/valorant.png')
  } else {
    return require('../../assets/image_not_found.jpg')
  }
}

function GamesHome() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404 Not Found</p>;

    return <div className="game-cards-wrapper">
      <Row>
        {data.getGames.map(({name, platform}: any) => (
          <Col span={5}>
            <Card
              hoverable
              className="game-card"
              cover={<img alt="Not Found" src={getGameImage(name)} />}
            >
              <Meta title={name} description={platform} />
            </Card>
          </Col>))}
      </Row>
    </div>
}

export default GamesHome;