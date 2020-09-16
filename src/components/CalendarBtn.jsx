import React from "react";
import styled from "styled-components";

const CalBtn = styled.button`
  background-color: ${(props) => (props.active ? "#424749;" : "transparent")};
  border: none;
  border-radius: 50%;
  padding: 9px 11px;
  outline: none;
  cursor: pointer;
  margin: 16px 8px 8px 8px;
`;

const Day = styled.p`
  color: ${(props) => (props.active ? "#f1f1f2" : "#424749")};
  color: ${(props) => props.disabled && "#f1f1f2"};
  margin: 0px;
  font-weight: 100;
  font-size: 8px;
`;

const Date = styled.p`
  color: ${(props) => (props.active ? "#f1f1f2" : "#424749")};
  color: ${(props) => props.disabled && "#f1f1f2"};
  margin: 0px;
  font-weight: 700;
  font-size: 12px;
`;

const CalendarBtn = ({ day, date, active, disabled }) => {
  return (
    <CalBtn active={active} disabled={disabled}>
      <Day active={active} disabled={disabled}>
        {day}
      </Day>
      <Date active={active} disabled={disabled}>
        {date}
      </Date>
    </CalBtn>
  );
};

export default CalendarBtn;
