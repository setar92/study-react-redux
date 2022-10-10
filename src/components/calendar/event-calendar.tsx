import React, { FC } from 'react';

import { Calendar } from 'antd';
import { Moment } from 'moment';

import { IEvent } from '../../common/types';
import { formatDate } from '../../helpers/date';

interface EventProps {
  events: IEvent[];
}

const EventCalendar: FC<EventProps> = ({ events }) => {
  const dateCellRender: FC<Moment> = (value: Moment) => {
    const formatedData = formatDate(value.toDate());
    const currentDayEvent = events.filter(
      (event) => event.data === formatedData,
    );
    return (
      <div>
        {currentDayEvent.map((ev, indx) => (
          <div key={indx}>{ev.description}</div>
        ))}
      </div>
    );
  };
  return <Calendar dateCellRender={dateCellRender} />;
};

export { EventCalendar };
