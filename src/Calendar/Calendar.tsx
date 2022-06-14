import React from 'react';
import { MonthAvailabilityCalendar } from './MonthAvailabilityCalendar/MonthAvailabilityCalendar';

type CalendarProps = {
  type: 'availability-of-specific-month';
  displayYearMonth: string;
  bookedDays: Array<string>;
  isDisplaymonth?: boolean;
  isDisplayYear?: boolean;
  monthLinesNumber?: number;
  monthDayNames?: Array<string>;
  bookedDayColor?: string;
};

export const Calendar = ({
  type,
  displayYearMonth,
  bookedDays,
  isDisplaymonth = true,
  isDisplayYear = true,
  monthLinesNumber,
  monthDayNames,
  bookedDayColor,
}: CalendarProps) => {
  if (type === 'availability-of-specific-month') {
    return (
      <MonthAvailabilityCalendar
        displayYearMonth={displayYearMonth}
        bookedDays={bookedDays}
        isDisplaymonth={isDisplaymonth}
        isDisplayYear={isDisplayYear}
        monthLinesNumber={monthLinesNumber}
        monthDayNames={monthDayNames}
        bookedDayColor={bookedDayColor}
      />
    );
  }
  return null;
};
