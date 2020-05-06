import 'antd/dist/antd.css';
import './CreateTeam.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';


import { Form, Input, PageHeader, Button } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Store } from 'antd/lib/form/interface';
import { IRootReducer } from "../../redux/IRootReducer";
import { useSelector } from "react-redux";
import Text from 'antd/lib/typography/Text';

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
  const history = useHistory();
  const [createTeam] = useMutation(CREATE_TEAM);

  const isAuthenticated: boolean = useSelector<IRootReducer, boolean>(
    state => state.userReducer.authenticated);

    if (!isAuthenticated) {
      return (
        <Text>
          Uh oh. Creating a team requires an account. Would you like to 
          <Link to="/login"> login </Link> 
          or signup? 
        </Text>
      )
    }

  const url = window.location.href;
  const beginIdx = url.indexOf('ladders/')+8;
  const endIdx = url.indexOf('/', beginIdx);
  const ladderId = url.substring(beginIdx, endIdx);

  

  const onSubmit = ({ teamName }: Store) => {
    createTeam({ variables: { ladderId, teamName } });
  }

  return (
    <div className="wrapper">
      <PageHeader
          onBack={() => history.goBack()}
          title="Create Team"
        />
      <Form
        onFinish={onSubmit}
      >
        <Form.Item
          name="teamName"
          rules={[{ required: true, message: 'Team Name' }]}
        >
          <Input prefix={<TeamOutlined className="site-form-item-icon" />} placeholder="Enter Team Name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Team
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateTeam;