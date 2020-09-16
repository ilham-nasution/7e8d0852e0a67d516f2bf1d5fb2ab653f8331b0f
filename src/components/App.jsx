import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import Calendar from "./Calendar";
import MealBtn from "./MealBtn";
import MealCard from "./MealCard";
import styled from "styled-components";
import MealCart from "./MealCart";

const Container = styled.div`
  padding: 8px 16px;
`;

const Date = styled.p`
  color: #424749;
  font-weight: bold;
  margin-top: 32px;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
`;

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart(true);
  };

  return (
    <>
      <Sticky>
        <Header />
        <Calendar />
      </Sticky>
      <Container>
        <MealBtn />
        <Date>Kamis. 13 Maret 2019</Date>
        <MealCard handleCart={handleCart} />
        <MealCard handleCart={handleCart} />
        <MealCard handleCart={handleCart} />
      </Container>
      {showCart && <MealCart />}
    </>
  );
};

export default App;
