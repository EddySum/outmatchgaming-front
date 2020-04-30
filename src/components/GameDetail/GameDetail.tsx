import 'antd/dist/antd.css';
import './GameDetail.css';
import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

function GameDetail() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>404 Not Found</p>;
   
  return (
    <p>testing</p>
  )
}

export default GameDetail;