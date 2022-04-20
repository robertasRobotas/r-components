import React from 'react';
import { MonthAvailabilityCalendar } from './MonthAvailabilityCalendar/MonthAvailabilityCalendar';

type CalendarProps = {
  type: 'availability-of-specific-month';
  busyDays: Array<any>;
};

export const Calendar = ({ type, busyDays }: CalendarProps) => {
  if (type === 'availability-of-specific-month') {
    return <MonthAvailabilityCalendar busyDays={busyDays} />;
  }
  return null;
};
