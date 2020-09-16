import React, { useState } from "react";
import styled from "styled-components";

const GroupBtn = styled.div`
  display: flex;
  justify-content: center; d
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? "#424749" : "transparent")};
  border: 1px solid #e2e4e4;
  outline: none;
  color: #e2e4e4;
  padding: 8px 0px;
  width: 50%;
  border-radius: 4px;
`;

const MealBtn = () => {
  const [lunchActive, setLunchActive] = useState(true);
  const [dinnerActive, setDinnerActive] = useState(false);

  const handleActiveBtn = () => {
    setLunchActive(!lunchActive);
    setDinnerActive(!dinnerActive);
  };

  return (
    <GroupBtn>
      <Button onClick={handleActiveBtn} active={lunchActive}>
        Lunch
      </Button>
      <Button onClick={handleActiveBtn} active={dinnerActive}>
        Dinner
      </Button>
    </GroupBtn>
  );
};

export default MealBtn;
