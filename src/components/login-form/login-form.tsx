import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, Input, Button } from 'antd';

import './module.css';
import { useAppSelector } from '../../hooks/store/store-hooks';
import { AppDispatch } from '../../store';
import { loginUser } from '../../store/auth/slice';
import { rules } from '../../utils/rules';

const LoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error, isLoading } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (): void => {
    dispatch(loginUser({ username, password }));
  };
  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      {error && <div className="error">{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input
          value={username}
          onChange={(e): void => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="Password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input
          value={password}
          onChange={(e): void => setPassword(e.target.value)}
          type={'password'}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export { LoginForm };
