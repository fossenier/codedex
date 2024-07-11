import React, { useEffect, useState } from 'react';

import MyCalendar from '../components/Calendar';

const Index: React.FC = () => {
  const [events, setEvents] = useState<Array<{ title: string; start: Date; end: Date }>>([]);

  useEffect(() => {
    setEvents([
      {
        title: 'Sample Event',
        start: new Date(),
        end: new Date(),
      },
    ]);
  }, []);

  return (
    <div>
      <h1>My Calendar</h1>
      <MyCalendar events={events} />
    </div>
  );
};

export default Index;