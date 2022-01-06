import styled from "styled-components";
import Card from "./Card";

export default function Country({flag, CountryName}) {


  return (
    <CountryComponent>
      <CountryHeader>
        <Flag src={flag} alt="flag"/>
        <H1>{CountryName}</H1>
      </CountryHeader>
      <CountryMain>

        {/* country.recipes.map  */}
        <Card foodType="starters"/>
        <Card foodType="main" />
        <Card foodType="dessert" />
      </CountryMain>
    </CountryComponent>
  );
}

const CountryComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
`;

const CountryHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 3.1rem;
  margin: 0px 20px;
`;

const Flag = styled.img`
  //   border: 2px solid black;
  width: 200px;
  height: auto;
`;

const CountryMain = styled.section`
  color: green;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px;
`;
