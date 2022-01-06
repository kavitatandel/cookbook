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
  // border: 1px solid red;
  padding: 10px;
`;

const CountryHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  margin-top: 20px;
`;

const H1 = styled.h1`
  font-size: 4rem;
  margin: 0px 20px;
  font-weight: 800;
`;

const Flag = styled.img`
  border: 2px solid rgba(0,0,0, 0.1);
  width: 200px;
  height: auto;
  box-shadow: 0px 0px 3px rgba(0,0,0, 0.2);
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
