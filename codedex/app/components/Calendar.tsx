"use client"; // Add this directive at the top

import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment';
import dynamic from 'next/dynamic';
import { CalendarProps, momentLocalizer } from 'react-big-calendar';

// Import the calendar component dynamically with no SSR
const Calendar = dynamic<CalendarProps<any, any>>(
  () => import('react-big-calendar').then((mod) => mod.Calendar),
  { ssr: false }
);

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Event 1',
    start: new Date(2024, 6, 11, 10, 0), // July 11, 2024, 10:00 AM
    end: new Date(2024, 6, 11, 12, 0), // July 11, 2024, 12:00 PM
  },
  {
    title: 'Event 2',
    start: new Date(2024, 6, 12, 14, 0), // July 12, 2024, 2:00 PM
    end: new Date(2024, 6, 12, 16, 0), // July 12, 2024, 4:00 PM
  },
];

const MyCalendar = () => (
  <div style={{ height: '500px' }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;