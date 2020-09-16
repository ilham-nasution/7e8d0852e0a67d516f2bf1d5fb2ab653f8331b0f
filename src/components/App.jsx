import React from "react";
import Header from "./Header";
import "./App.css";
import Calendar from "./Calendar";
import MealBtn from "./MealBtn";
import MealCard from "./MealCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 16px;
`;

const Date = styled.p`
  color: #424749;
  font-weight: bold;
  margin-top: 32px;
`;

const App = () => {
  return (
    <>
      <Header />
      <Calendar />
      <Container>
        <MealBtn />
        <Date>Kamis. 13 Maret 2019</Date>
        <MealCard />
        <MealCard />
        <MealCard />
      </Container>
    </>
  );
};

export default App;
