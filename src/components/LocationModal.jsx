import React, { useState } from "react";
import styled from "styled-components";
import Location from "./Location";
import "./Modal.css";

const ADDRESS_LIST = [
  {
    name: "Kulina",
    address: "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru",
  },
  {
    name: "Kulina",
    address: "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru",
  },
  {
    name: "Kulina",
    address: "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru",
  },
  {
    name: "Kulina",
    address: "Jalan Tulodong Atas 28, Senayan, Kebayoran Baru",
  },
];

const Modal = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.438);
`;

const ModalBox = styled.div`
  background-color: white;
  margin-top: 110px;
  padding: 16px;
  height: 100vh;
  border-radius: 8px 8px 0px 0px;
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #424749;
`;

const LocationInput = styled.div`
  position: relative;
`;

const LocationIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 14px;
  color: #f9234a;
`;

const LocationModal = ({ handleModal }) => {
  const [addressList, setAddressList] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.length > 2) {
      setAddressList(ADDRESS_LIST);
    } else {
      setAddressList(null);
    }
  };

  return (
    <Modal>
      <ModalBox>
        <CloseIcon onClick={handleModal}>
          <span className="material-icons">close</span>
        </CloseIcon>
        <Title>Cek makanan yang tersedia di lokasi kamu!</Title>
        <LocationInput>
          <LocationIcon className="material-icons">location_on</LocationIcon>
          <input
            onChange={handleChange}
            className="custom-input"
            type="text"
            value={value}
          />
        </LocationInput>
        {addressList && <Location addressList={addressList} />}
      </ModalBox>
    </Modal>
  );
};

export default LocationModal;
