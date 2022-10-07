import React from "react";
import Head from "next/head";
import { Pokemon } from "../../interfaces/pokemon";
import { Layout } from "../../components/Layout";
import Link from "next/link";
import SinglePokemonCard from "../../components/SinglePokemonCard";
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

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const PokemonPage = (pokemon: Pokemon) => {
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
      </Head>

      <HeaderDiv>
        <Button>
          {" "}
          <Link href={`/pokemon/${pokemon.id - 1}`}>{`< Previous`}</Link>{" "}
        </Button>
        <Button>
          {" "}
          <Link href={`/pokemon/${+pokemon.id + 1}`}>{`Next >`}</Link>{" "}
        </Button>
        <Button>
          {" "}
          <Link href={`/`}>{`Home`}</Link>{" "}
        </Button>
      </HeaderDiv>
      <SinglePokemonCard pokemon={pokemon} />
    </>
  );
};

PokemonPage.getLayout = Layout;

export async function getServerSideProps({
  params: { id },
}: {
  params: { id: number };
}) {
  try {
    const pokemon = await fetch(`http://localhost:3000/api/pokemon/${id}`).then(
      (resp) => resp.json()
    );
    return { props: pokemon };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default PokemonPage;
