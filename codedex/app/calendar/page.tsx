import React from 'react';

import MyCalendar from '../components/Calendar';
import Layout from '../layout';

const CalendarPage: React.FC = () => {
  return (
    <Layout>
      <h1>Calendar</h1>
      <MyCalendar />
    </Layout>
  );
};

export default CalendarPage;