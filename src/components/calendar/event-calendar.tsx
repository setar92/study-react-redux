import React, { FC } from 'react';

import { Calendar } from 'antd';

import { IEvent } from '../../common/types';

interface EventProps {
  events: IEvent[];
}

const EventCalendar: FC<EventProps> = () => {
  return <Calendar />;
};

export { EventCalendar };
