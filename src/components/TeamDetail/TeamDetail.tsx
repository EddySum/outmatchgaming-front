import 'antd/dist/antd.css';
import './TeamDetail.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { PageHeader} from 'antd';

export const GET_TEAM_DETAILS = gql`
  query TeamDetails($teamId: ID!) {
    getTeam(_id: $teamId) {
      name
      ladderId
      playersId
      points
    }
  }
`;

function TeamDetail() {
  const history = useHistory();

  const url = window.location.href;
  const teamId = url.slice(url.lastIndexOf('/')+1)
  
  const { data, loading, error } = useQuery(GET_TEAM_DETAILS, { variables: { teamId } } );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div className="wrapper">
      <PageHeader
        onBack={() => history.goBack()}
        title={'Dream Team'}
      />
    </div>
  )
}

export default TeamDetail;