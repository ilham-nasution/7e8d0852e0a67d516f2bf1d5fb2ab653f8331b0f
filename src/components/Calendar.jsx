import React, { useState } from "react";
import CalendarBtn from "./CalendarBtn";
import styled from "styled-components";

const CalendarBtnList = styled.div`
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid #f1f1f2;
`;

const INITIAL_STATE = [
  { day: "SEN", date: 10, active: false },
  { day: "SEL", date: 11, active: false },
  { day: "RAB", date: 12, active: false },
  { day: "KAM", date: 13, active: true },
  { day: "JUM", date: 14, active: false },
  { day: "SAB", date: 15, active: false },
  { day: "MIN", date: 16, active: false },
  { day: "SEN", date: 17, active: false },
  { day: "SEL", date: 18, active: false },
  { day: "RAB", date: 19, active: false },
  { day: "KAM", date: 20, active: false },
  { day: "JUM", date: 21, active: false },
  { day: "SAB", date: 22, active: false },
  { day: "MIN", date: 23, active: false },
];

const Calendar = () => {
  const [days] = useState(INITIAL_STATE);

  return (
    <CalendarBtnList>
      {days.map((day, index) => {
        if (day.active) {
          return (
            <CalendarBtn active key={index} day={day.day} date={day.date} />
          );
        } else if (day.day !== "MIN" && day.day !== "SAB") {
          return <CalendarBtn key={index} day={day.day} date={day.date} />;
        } else {
          return (
            <CalendarBtn disabled key={index} day={day.day} date={day.date} />
          );
        }
      })}
    </CalendarBtnList>
  );
};

export default Calendar;
