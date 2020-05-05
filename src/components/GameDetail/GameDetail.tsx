import 'antd/dist/antd.css';
import './GameDetail.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Card, Col, Row, PageHeader} from 'antd';

export const GET_GAME_DETAILS = gql`
  query GameDetails($gameId: ID!) {
    getGame(_id: $gameId) {
      _id
      name
      platform
      ladders {
        _id
        name
        maxPlayers
      }
    }
  }
`;

function GameDetail() {
  const history = useHistory();

  const url = window.location.href;
  const gameId = url.slice(url.lastIndexOf('/')+1)
  
  const { data, loading, error } = useQuery(GET_GAME_DETAILS, { variables: { gameId } } );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div className="game-wrapper">
      <PageHeader
        className="game-header"
        onBack={() => history.goBack()}
        title={data.getGame.name}
        subTitle="Ladders / Tournaments"
      />
      <Row gutter={[32, 32]}>
        {data.getGame.ladders?.map(({ name, maxPlayers, _id }: any) => (
          <Col>
            <Card 
              className="ladder-card" 
              title={name} 
              extra={<Link to={`/ladders/${_id}/create`}>Create Team</Link>}
            >
              <p>Type: Ladder</p>
              <p>Max Players: {maxPlayers}</p>
            </Card> 
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default GameDetail;