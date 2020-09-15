import React from "react";
import styled from "styled-components";

const AddressBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const LocationName = styled.p`
  color: #424749;
  font-size: 16px;
  margin: 0px;
`;

const AddressName = styled.p`
  color: #6e7679;
  margin: 0px;
  font-size: 14px;
`;

const Address = styled.div`
  border-bottom: 1px solid #f1f1f2;
  margin-left: 8px;
  padding-bottom: 16px;
`;

const LocationIcon = styled.span`
  background-color: #f1f1f2;
  padding: 4px;
  border-radius: 50%;
  color: #6e7679;
  margin-right: 8px;
`;

const Location = ({ addressList }) => {
  return (
    <>
      {addressList.map((address, index) => (
        <AddressBox key={index}>
          <LocationIcon className="material-icons">location_on</LocationIcon>
          <Address>
            <LocationName>{address.name}</LocationName>
            <AddressName>{address.address}</AddressName>
          </Address>
        </AddressBox>
      ))}
    </>
  );
};

export default Location;
