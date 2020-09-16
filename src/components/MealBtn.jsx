import React from "react";
import styled from "styled-components";
import "./MealBtn.css";

const GroupBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const MealBtn = () => {
  return (
    <GroupBtn>
      <button className="meal-btn-active">Lunch</button>
      <button className="meal-btn">Dinner</button>
    </GroupBtn>
  );
};

export default MealBtn;
