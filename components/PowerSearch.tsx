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
`;

const PowerSearch = () => (
  <form>
    <label htmlFor="header-search">Filter by power</label>
    <Input type="text" placeholder="375, 1000, ..." name="search name" />
    <Button type="submit">Find</Button>
  </form>
);

export default PowerSearch;
