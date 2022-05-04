import React from 'react';
import styled, { css } from 'styled-components';
import useCalendar from '../../hooks/useCalendar';

const Wrapper = styled.div<any>`
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div<any>`
  margin: auto;
`;

const DaysRow = styled.div<any>`
  display: flex;
  justify-content: space-around;
  background: #ffffff;

  ${(props) =>
    props.isPaintRow &&
    css`
      background: #d9d9d9;
    `}
`;

const CalendarDay = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 35px;
  height: 48px;

  ${(props) =>
    props.disable &&
    css`
      color: #c9c9c9;
    `}
`;

const BookedWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background: #d17575;
  color: white;
`;

const Title = styled.p<any>`
  padding-left: 12px;
`;

const Table = styled.div<any>`
  margin: auto;
  width: 100%;
  border-spacing: 0 !important;
`;

type CalendarProps = {
  displayYearMonth?: string;
  bookedDays: Array<string>;
  isDisplaymonth?: boolean;
  isDisplayYear?: boolean;
  monthLinesNumber?: number;
  monthDayNames?: Array<string>;
};

export const MonthAvailabilityCalendar = ({
  displayYearMonth,
  bookedDays,
  isDisplaymonth,
  isDisplayYear,
  monthLinesNumber,
  monthDayNames,
}: CalendarProps) => {
  const {
    calendarRows,
    selectedDate,
    daysShort,
    monthNames,
    // getNextMonth,
    // getPrevMonth,
  } = useCalendar({
    displayYearMonth,
    monthLinesNumber,
    daysShort: monthDayNames,
  });

  const dateClickHandler = (date: any) => {
    console.log(date);
  };

  return (
    <Wrapper className="wrapper">
      <ContentWrapper>
        {isDisplayYear && isDisplaymonth && (
          <Title>
            {isDisplaymonth && monthNames[selectedDate.getMonth()]}
            {isDisplayYear && isDisplaymonth && ','}{' '}
            {isDisplayYear && selectedDate.getFullYear()}
          </Title>
        )}
        <Table className="table">
          <div>
            <DaysRow>
              {daysShort.map((day) => (
                <CalendarDay key={day}>{day}</CalendarDay>
              ))}
            </DaysRow>
          </div>
          <div>
            {Object.values(calendarRows).map((cols: any, index) => {
              return (
                <DaysRow isPaintRow={index % 2 === 0} key={cols[0].date}>
                  {cols.map((col: any) => (
                    <>
                      {bookedDays.includes(col.date) ? (
                        <CalendarDay
                          disable={
                            col.classes === 'in-next-month' ||
                            col.classes === 'in-prev-month'
                          }
                          booked={bookedDays.includes(col.date)}
                          key={col.date}
                          onClick={() => dateClickHandler(col.date)}
                        >
                          <BookedWrapper> {col.value}</BookedWrapper>
                        </CalendarDay>
                      ) : (
                        <CalendarDay
                          disable={
                            col.classes === 'in-next-month' ||
                            col.classes === 'in-prev-month'
                          }
                          booked={bookedDays.includes(col.date)}
                          key={col.date}
                          onClick={() => dateClickHandler(col.date)}
                        >
                          {col.value}
                        </CalendarDay>
                      )}
                    </>
                  ))}
                </DaysRow>
              );
            })}
          </div>
        </Table>

        {/* <button className="button" onClick={getPrevMonth}>
        Prev
      </button>
      <button className="button" onClick={getNextMonth}>
        Next
      </button> */}
      </ContentWrapper>
    </Wrapper>
  );
};
