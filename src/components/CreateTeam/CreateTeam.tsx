import 'antd/dist/antd.css';
import './CreateTeam.css';
import React from 'react';
import { useHistory } from 'react-router-dom';


import { Form, Input, Button, Typography } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Store } from 'antd/lib/form/interface';

export const CREATE_TEAM = gql`
  mutation CreateTeam($ladderId: ID!, $teamName: String!) {
    createTeam(ladderId: $ladderId, name: $teamName) {
      _id
      name
      ladderId
      points
    }
  }
`;

function CreateTeam() {
  const url = window.location.href;
  const beginIdx = url.indexOf('ladders/')+8;
  const endIdx = url.indexOf('/', beginIdx);
  const ladderId = url.substring(beginIdx, endIdx);

  const [createTeam, { data }] = useMutation(CREATE_TEAM);

  const onSubmit = ({ teamName }: Store) => {
    createTeam({ variables: { ladderId, teamName } });
  }

  return (
    <Form
      onFinish={onSubmit}
    >
      <Form.Item
        name="teamName"
        rules={[{ required: true, message: 'Team Name' }]}
      >
        <Input prefix={<TeamOutlined className="site-form-item-icon" />} placeholder="Enter Team Name" />
      </Form.Item>
      <button type="submit">Add Todo</button>
    </Form>
  )
}

export default CreateTeam;