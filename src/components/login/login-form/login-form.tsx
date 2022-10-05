import React, { FC } from 'react';

import { Form, Input, Button } from 'antd';

import './module.css';
import { useGetUsersQuery } from '../../../store/queries/users';
import { rules } from '../../../utils/rules';

const LoginForm: FC = () => {
  useGetUsersQuery({ username: 'Serhii', password: '123' });
  const handleSubmit = (): void => {
    console.log('Hi');
  };
  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="Password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export { LoginForm };
