import React, { FC, useState } from 'react';

import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';

import { User, IEvent } from '../../common/types';
import { rules } from '../../utils/rules';

const { Option } = Select;
interface EventFormProps {
  guests: User[];
}

const EventForm: FC<EventFormProps> = ({ guests }) => {
  const selectDate = (data: Moment): void => {
    console.log(data);
  };
  const [event, setEvent] = useState<IEvent>({
    guest: '',
    author: '',
    data: '',
    description: '',
  } as IEvent);
  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e): void =>
            setEvent({ ...event, description: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item label="Event date." name="date" rules={[rules.required()]}>
        <DatePicker onChange={(data): void => selectDate(data as Moment)} />
      </Form.Item>
      <Form.Item label="Guests" name="guests" rules={[rules.required()]}>
        <Select
          style={{ width: 120 }}
          onChange={(guest): void => setEvent({ ...event, guest })}
        >
          {guests.map((user) => {
            return (
              <Option value={user.username} key={user.username}>
                {user.username}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export { EventForm };
