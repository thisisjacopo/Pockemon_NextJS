import React from "react";
import styled from "styled-components";

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
  :hover {
    color: #333;
    background-image: linear-gradient(25deg, #decba4, #3e5151);

    cursor: pointer;
  }
`;

const BottomInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  text-align: center;
`;

function Image({ style, src }: ImageProps) {
  return <img src={src} style={style}></img>;
}

const PokemonCard = ({ pokemon }: any, totalPoints: number): JSX.Element => {
  const imageSrc = `images/${pokemon.name.toLowerCase()}.jpg`;
  //* this should be perfected for not missing names that include special characters

  let imgStyles = {
    width: "150px",
    height: "150px",
    border: "2px solid #333",
    borderRadius: " 50%",
    objectFit: "cover",
  };

  return (
    <Card color={pokemon.type} key={pokemon.name}>
      <h3>Name:</h3>
      <h1>{pokemon.name}</h1>
      <Image src={imageSrc} style={imgStyles} />
      <h3>Type:</h3>
      <p>
        {pokemon.type.map((t: string) => {
          return t + " ";
        })}
      </p>
      <h3>Total Power:</h3>
      <h2>{pokemon.total_points}</h2>
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
