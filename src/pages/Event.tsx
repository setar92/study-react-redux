import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Layout, Row, Button, Modal } from 'antd';

import { EventCalendar } from '../components/calendar/event-calendar';
import { EventForm } from '../components/event-form/event-form';
import { useAppSelector } from '../hooks/store/store-hooks';
import { AppDispatch } from '../store';
import { fetchGuests } from '../store/event/slice';

const Event: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGuests());
  }, []);
  const { guests } = useAppSelector((state) => state.event);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={(): void => setIsModalOpen(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        open={isModalOpen}
        footer={[]}
        onCancel={(): void => setIsModalOpen(false)}
      >
        <EventForm guests={guests}></EventForm>
      </Modal>
    </Layout>
  );
};

export { Event };
