import React from "react";
import styled from "styled-components";


const Button = styled.button`
  background: none;
  border: 2px solid #f5f5f5;
  color: #f5f5f5;
  border-radius: 10px;
  padding: 8px;
  font-size: 22px;
  margin: 16px;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  :hover {
    color: #333;
    background-color: #f5f5f5;
    border: 2px solid #333;
  }
`;

const Input = styled.input`
  font-size: 18px;
  padding: 8px;
  margin: 16px;
  background: #f5f5f5;
  border: none;
  border-radius: 3px;
  min-width: 300px;
  color: #333;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
`;

const PowerSearch = ({ handleSearchPower } : any) => {
  const handlePowerSearch = () => {
    const input = document.getElementById("power-search") as HTMLInputElement;
    const value = input?.value;

    handleSearchPower(value);
  };

  return (
    <form>
      <label htmlFor="header-search">Filter by power</label>
      <Input
        type="number"
        placeholder="375, 1000, ..."
        name="power name"
        id="power-search"
      />
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handlePowerSearch();
        }}>
        Find
      </Button>
    </form>
  );
};

export default PowerSearch;
