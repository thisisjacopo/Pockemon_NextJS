import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Pokemon } from "../interfaces/pokemon";

interface ImageProps extends React.ButtonHTMLAttributes<HTMLImageElement> {
  style: React.CSSProperties;
  src: string;
}

const Card = styled.div`
  min-width: 250px;
  min-height: 450px;
  padding: 8px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e3e3e3;
  border: 4px solid #e3e3e3;
  border-radius: 20px;
  box-shadow: 5px 15px 18px rgb(249, 249, 249, 0.5);
  background-image: linear-gradient(25deg, #355c7d, #6c5b7b, #c06c84);
`;

const BottomInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  text-align: center;
`;

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

function Image({ style, src }: ImageProps) {
  return <img src={src} style={style}></img>;
}

const PokemonCard = (
  { pokemon }: Pokemon | any,
  totalPoints: number
): JSX.Element => {
  const imageSrc =
    pokemon.name &&
    pokemon.name !== undefined &&
    `../images/${pokemon.name.toLowerCase()}.jpg`;
  //* this should be perfected for not missing names that include special characters

  let imgStyles = {
    width: "150px",
    height: "150px",
    border: "2px solid #333",
    borderRadius: " 50%",
  };

  return (
    <Card color={pokemon.type} key={pokemon.name}>
      <h3>Name:</h3>
      <h1>{pokemon.name}</h1>
      <Image src={imageSrc} style={imgStyles} />
      <h3>Type:</h3>
      <p>
        {pokemon &&
          pokemon.type !== undefined &&
          pokemon.type.map((t: string) => {
            return t + " ";
          })}
      </p>
      <h3>Total Power:</h3>
      <h2>{pokemon.total_points}</h2>
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
