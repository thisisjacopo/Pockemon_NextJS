import React from "react";
import styled from "styled-components";

const Card = styled.div`
  min-width: 250px;
  min-height: 450px;
  padding: 8px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #222;
  background-color: #f4f4f4;
`;

const BottomInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  align-items: center;
  text-align: center;
`;

const PokemonCard = ({ pokemon }: any): JSX.Element => {

  return (
    <Card color={pokemon.type}>
      <h2>Name:</h2>
      <h3>{pokemon.name}</h3>
      <h2>Type:</h2>
      <p>
        {pokemon.type.map((t: string) => {
          return t + " ";
        })}
      </p>
      <div></div>
      <BottomInfo>
        <h5>HP:</h5>
        <p>{pokemon.hp}</p>
        <h5>Attack:</h5>
        <p>{pokemon.attack}</p>
        <h5>Defense:</h5>
        <p>{pokemon.defense}</p>
        <h5>Speed:</h5>
        <p>{pokemon.speed}</p>
        <h5>Special Attack:</h5>
        <p>{pokemon.special_attack}</p>
        <h5>Special Defense:</h5>
        <p>{pokemon.special_defense}</p>
      </BottomInfo>
    </Card>
  );
};

export default PokemonCard;
