import 'antd/dist/antd.css';
import './TeamDetail.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { PageHeader, Spin, Table } from 'antd';

export const GET_TEAM_DETAILS = gql`
  query TeamDetails($teamId: ID!) {
    getTeam(_id: $teamId) {
      name
      ladderId
      playersId
      points
      players {
        _id
        username
        points
      }
    }
  }
`;

function TeamDetail() {
  const history = useHistory();

  const url = window.location.href;
  const teamId = url.slice(url.lastIndexOf('/')+1)
  
  const { data, loading, error } = useQuery(GET_TEAM_DETAILS, { variables: { teamId } } );

  
  if (loading) return <Spin />;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Gamertag',
      dataIndex: 'gamertag',
      key: 'gamertag',
    },
    {
      title: 'Points',
      dataIndex: 'points',
      key: 'points',
    }
  ];

  let tableData;
  if (data) {
    // transform player objects to player data
    tableData = data.getTeam.players.map((player: any) => {
      return {
        username: player.username,
        key: player._id,
        points: player.points,
        gamertag: 'Static Gamertag'
      }
    });
  } 

  return (
    <div className="wrapper">
      <PageHeader
        onBack={() => history.goBack()}
        title={data.getTeam.name}
      />
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}

export default TeamDetail;