import React from "react";
import styled from "styled-components";

const CalBtn = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 9px 11px;
  outline: none;
  cursor: pointer;
  margin: 16px 8px 8px 8px;
`;

const Day = styled.p`
  color: #f1f1f2;
  margin: 0px;
  font-weight: 100;
  font-size: 8px;
`;

const Date = styled.p`
  color: #f1f1f2;
  margin: 0px;
  font-weight: 700;
  font-size: 12px;
`;

const CalendarBtnDisabled = ({ day, date }) => {
  return (
    <CalBtn>
      <Day>{day}</Day>
      <Date>{date}</Date>
    </CalBtn>
  );
};

export default CalendarBtnDisabled;
