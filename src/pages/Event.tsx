import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Layout, Row, Button, Modal } from 'antd';

import { IEvent } from '../common/types';
import { EventCalendar } from '../components/calendar/event-calendar';
import { EventForm } from '../components/event-form/event-form';
import { useAppSelector } from '../hooks/store/store-hooks';
import { AppDispatch } from '../store';
import { addEvent, fetchGuests } from '../store/event/slice';

const Event: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const submit = (e: IEvent): void => {
    setIsModalOpen(false);
    dispatch(addEvent(e));
  };

  const { guests, events } = useAppSelector((state) => state.event);
  useEffect(() => {
    dispatch(fetchGuests());
  }, [guests, events]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={(): void => setIsModalOpen(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        open={isModalOpen}
        footer={[]}
        onCancel={(): void => setIsModalOpen(false)}
      >
        <EventForm guests={guests} submit={submit}></EventForm>
      </Modal>
    </Layout>
  );
};

export { Event };
