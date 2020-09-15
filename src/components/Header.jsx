import React, { useState } from "react";
import styled from "styled-components";
import LocationModal from "./LocationModal";

const Row = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-left: 8px;
`;

const Title = styled.p`
  font-size: 8px;
  color: #6e7679;
  margin: 0px;
`;

const Location = styled.button`
  font-size: 16px;
  margin: 0px;
  display: flex;
  align-items: center;
  color: #424749;
  background-color: transparent;
  border: none;
  padding: 0px;
  outline: none;
  cursor: pointer;
`;

const BackArrow = styled.span`
  margin-right: 16px;
  cursor: pointer;
`;

const ExpandIcon = styled.span`
  color: #f9234a;
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <LocationModal handleModal={handleModal} />}
      <Row>
        <BackArrow className="material-icons">arrow_back</BackArrow>
        <div>
          <Title>ALAMAT PENGANTARAN</Title>
          <Location onClick={handleModal}>
            Tokopedia Tower{" "}
            <ExpandIcon className="material-icons">expand_more</ExpandIcon>
          </Location>
        </div>
      </Row>
    </>
  );
};

export default Header;
