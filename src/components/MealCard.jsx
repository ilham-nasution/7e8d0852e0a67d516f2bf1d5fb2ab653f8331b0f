import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  margin: 16px 0px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 55%;
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 8px 16px;
`;

const Rating = styled.p`
  margin: 0px;
  font-size: 14px;
  color: #6e7679;
`;

const StarIcon = styled.span`
  font-size: 14px;
  color: #f9234a;
`;

const FoodName = styled.p`
  color: #424749;
  margin: 8px 0px;
  font-size: 16px;
`;

const RestaurantName = styled.p`
  margin: 0px;
  color: #6e7679;
  font-size: 12px;
`;

const Price = styled.p`
  color: #424749;
  margin-top: 16px;
  font-size: 16px;
`;

const CartBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #f9234a;
  color: #f1f1f2;
  padding: 8px 16px;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const MealCard = ({ handleCart }) => {
  return (
    <Card>
      <CardImg
        src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1253&q=80"
        alt="food"
      />
      <CardContent>
        <Rating>
          4.5 <StarIcon className="material-icons">star</StarIcon>
          <StarIcon className="material-icons">star</StarIcon>
          <StarIcon className="material-icons">star</StarIcon>
          <StarIcon className="material-icons">star</StarIcon>
          <StarIcon className="material-icons">star_half</StarIcon>
        </Rating>
        <FoodName>Bread Toast with Avocado and Egg</FoodName>
        <RestaurantName>by Kulina • Uptown Lunch</RestaurantName>
        <Row>
          <Price>Rp 35,000</Price>
          <CartBtn onClick={handleCart}>ADD +</CartBtn>
        </Row>
      </CardContent>
    </Card>
  );
};

export default MealCard;
