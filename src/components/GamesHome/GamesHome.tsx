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
      platform,
      imageLink
    }
  }
`;

function GamesHome() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404 Not Found</p>;

  return (
    <div className="game-cards-wrapper">
      <Row gutter={[32, 32]}>
        {data.getGames.map(({name, platform, imageLink}: any) => (
          <Col>
            <Card
              hoverable
              className="game-card"
              cover={<img alt="Not Found" src={imageLink} />}
            >
              <Meta title={name} description={platform} />
            </Card>
          </Col>))}
      </Row>
    </div>
  )
}

export default GamesHome;