import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

const localizer = momentLocalizer(moment);

interface MyCalendarProps {
  events: Array<{ title: string; start: Date; end: Date }>;
}

const MyCalendar: React.FC<MyCalendarProps> = ({ events }) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;