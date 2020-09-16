import React from "react";
import styled from "styled-components";

const CartBtn = styled.button`
  background-color: #a23530;
  color: #f1f1f2;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  position: fixed;
  bottom: 10px;
  left: 10px;
  display: block;
  width: 95%;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cart = styled.p`
  margin: 8px 0px;
`;

const TextLeft = styled.div`
  text-align: left;
`;

const MealCart = () => {
  return (
    <CartBtn>
      <Row>
        <TextLeft>
          <Cart>5 Items | Rp 125,000</Cart>
          <Cart>Termasuk ongkos kirim</Cart>
        </TextLeft>
        <div>
          <span className="material-icons">shopping_cart</span>
          <span className="material-icons">chevron_right</span>
        </div>
      </Row>
    </CartBtn>
  );
};

export default MealCart;
