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
  color: #424749;
  margin: 0px;
  font-weight: 100;
  font-size: 8px;
`;

const Date = styled.p`
  color: #424749;
  margin: 0px;
  font-weight: 700;
  font-size: 12px;
`;

const CalendarBtn = ({ day, date }) => {
  return (
    <CalBtn>
      <Day>{day}</Day>
      <Date>{date + 1}</Date>
    </CalBtn>
  );
};

export default CalendarBtn;
