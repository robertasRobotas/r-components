import { useState } from 'react';

type Props = {
  displayYearMonth?: string;
  daysShort?: Array<string>;
  monthNames?: Array<string>;
  monthLinesNumber?: number;
  monthDayNames?: Array<string>;
};

const daysShortArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const monthNamesArr = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const useCalendar = ({
  daysShort = daysShortArr,
  monthNames = monthNamesArr,
  displayYearMonth,
  monthLinesNumber,
}: Props) => {
  const addZeroToSingleNumber = (number: number): string => {
    if (number.toString().length === 1) {
      return `0${number}`;
    }

    return `${number}`;
  };

  const today =
    (displayYearMonth && new Date(new Date(displayYearMonth).toISOString())) ||
    new Date(new Date().toISOString());
  const todayFormatted = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  const [selectedDate, setSelectedDate] = useState(today);
  const selectedMonthLastDate = new Date(
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).toISOString()
  );
  const prevMonthLastDate = new Date(
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      0
    ).toISOString()
  );
  const daysInMonth = selectedMonthLastDate.getDate();
  const firstDayInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
  let prevMonthStartingPoint =
    prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;
  const rows = monthLinesNumber || 6;
  const cols = 7;
  const calendarRows: any = {};

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (!calendarRows[i]) {
        calendarRows[i] = [];
      }

      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: 'in-prev-month',
              date: `${
                selectedDate.getMonth() === 0
                  ? selectedDate.getFullYear() - 1
                  : selectedDate.getFullYear()
              }-${addZeroToSingleNumber(
                selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()
              )}-${addZeroToSingleNumber(prevMonthStartingPoint)}`,
              value: prevMonthStartingPoint,
            },
          ];
          prevMonthStartingPoint++;
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: '',
              date: `${selectedDate.getFullYear()}-${addZeroToSingleNumber(
                selectedDate.getMonth() + 1
              )}-${addZeroToSingleNumber(currentMonthCounter)}`,
              value: currentMonthCounter,
            },
          ];
          currentMonthCounter++;
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: '',
            date: `${selectedDate.getFullYear()}-${addZeroToSingleNumber(
              selectedDate.getMonth() + 1
            )}-${addZeroToSingleNumber(currentMonthCounter)}`,
            value: currentMonthCounter,
          },
        ];
        currentMonthCounter++;
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: 'in-next-month',
            date: `${
              selectedDate.getMonth() + 2 === 13
                ? selectedDate.getFullYear() + 1
                : selectedDate.getFullYear()
            }-${addZeroToSingleNumber(
              selectedDate.getMonth() + 2 === 13
                ? 1
                : selectedDate.getMonth() + 2
            )}-${addZeroToSingleNumber(nextMonthCounter)}`,
            value: nextMonthCounter,
          },
        ];
        nextMonthCounter++;
      }
    }
  }

  const getPrevMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(
          new Date(
            prevValue.getFullYear(),
            prevValue.getMonth() - 1,
            1
          ).toISOString()
        )
    );
  };

  const getNextMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(
          new Date(
            prevValue.getFullYear(),
            prevValue.getMonth() + 1,
            1
          ).toISOString()
        )
    );
  };

  return {
    daysShort,
    monthNames,
    todayFormatted,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
  };
};

export default useCalendar;
