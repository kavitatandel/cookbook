import styled from "styled-components";
import USflag from "../Images/USAFlag.png";
import Card from "./Card";

export default function Country() {
  return (
    <CountryComponent>
      <CountryHeader>
        <Flag src={USflag}></Flag>
        <H1>Country Name</H1>
      </CountryHeader>
      <CountryMain>
        <Card foodType="starters" />
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
