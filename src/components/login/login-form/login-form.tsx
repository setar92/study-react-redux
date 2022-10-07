import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input, Button } from 'antd';

import './module.css';
import { User } from '../../../common/types';
import { AppDispatch } from '../../../store';
import { loginUser } from '../../../store/auth/slice';
import { rules } from '../../../utils/rules';

const LoginForm: FC = () => {
  const user: User = { username: 'Serhii', password: '123' };
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (): void => {
    dispatch(loginUser(user));
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
