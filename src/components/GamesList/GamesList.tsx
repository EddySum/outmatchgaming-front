import 'antd/dist/antd.css';
import './GamesList.css';
import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

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

function GamesList() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404 Not Found</p>;
   
  return (
    <div className="game-cards-wrapper">
      <Row gutter={[32, 32]}>
        {data.getGames.map(({name, platform, imageLink, _id}: any) => (
          <Link to={`/games/${_id}`}>
            <Col>
              <Card
                hoverable
                className="game-card"
                cover={<img alt="Not Found" src={imageLink} />}
              >
                <Meta title={name} description={platform} />
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </div>
  )
}

export default GamesList;