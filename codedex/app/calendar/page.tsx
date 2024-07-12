"use client";
import React from 'react';

import { Calendar } from '@/components/ui/calendar'; // Importing the Calendar component

// Functional component for the Calendar Page
const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date()); // State to keep track of the selected date

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export default CalendarPage; // Exporting the CalendarPage component