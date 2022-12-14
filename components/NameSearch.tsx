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
`;

const NameSearch = ({ handleSearchName }: any) => {
  const handleNameSearch = () => {
    const input = document.getElementById("name-search") as HTMLInputElement;
    const value =
      input && input.value !== undefined && input?.value.toLowerCase();

    handleSearchName(value);
  };

  return (
    <form>
      <label htmlFor="header-search">Catch 'em!</label>
      <Input
        type="text"
        id="name-search"
        placeholder="Pikachu, Bulbasaur, ..."
        name="search name"
      />
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleNameSearch();
        }}>
        Search
      </Button>
    </form>
  );
};

export default NameSearch;
