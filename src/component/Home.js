import styled from 'styled-components';
import IndiaFlag from './Images/IndiaFlag.png';
import USAFlag from './Images/united-states.svg';
import UKFlag from './Images/united-kingdom.svg';
import PolandFlag from './Images/poland3.jpg';
import BackgroundImage from './Images/home-background.png';




//background-image: url("Images/home-background.png");
const Main = styled.main`
display:flex;
background-size: cover;
width: 100%;
background-position: center;
background-repeat: no-repeat;
min-height:300px;

@media screen and (min-width:768px) {
  background-size: cover;
  min-height:600px;
  width: 100%;

  }


`;

const Header = styled.h1`
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 30px;
margin-left: auto;
margin-right: auto;
color: white;
font-weight: 600;
margin-top: 370px;

@media screen and (min-width:768px) {
  font-size: 40px;
  margin-top: 370px;
  vertical-align:middle;
  }

@media screen and (min-width:950px) {
font-size: 50px;
margin-top: 45px;
vertical-align:middle;
}

@media screen and (min-width:1200px) {
  font-size: 70px;

  }

  `;


const SubHeader = styled.h2`
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 22px;
font-weight: 400;
color: white;

@media screen and (min-width:950px) {
  font-size: 32px;

}

  `;

//background-image: url("Images/home-background.png");
const Container = styled.div`
display:flex;
background-size: cover;
width: 100%;
height: 110vh;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
min-height:600px;
justify-content:center;
@media screen and (min-width:950px) {
  height: 100vh;

}
`;


const DivHomeFlag = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  margin-bottom: 300px;

@media screen and (min-width:950px) {
  display: flex;
width: 100%;
flex-direction: row;
  justify-content: space-around;
  margin: 20px;
  margin-bottom: 5%;
  max-width: 1000px;  
  @media screen and (min-width:768px) {
  }

  }

`;


const LinkHomeFlag = styled.a`
width: 22%;
text-align: center;
font-family: "Raleway", sans-serif;
font-size: 24px;
font-weight: 400;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (min-width:768px) {
}

&:hover {
  color: orange;
  text-decoration: none;
}
`;

  const Embed = styled.embed`
  border-radius: 50%;
  borderRadius: 50%;
  width: 230px;
  height: 160px; 

  @media screen and (min-width:768px) {
    width: 230px;
  height: 160px; 
  }

  `;



const Home = () => {
  return (
    <>
      <Main >
        <Container style={{ backgroundImage: `url(${BackgroundImage})` }}>

          <Header>Discover the World of Spicy Food!</Header>

          <SubHeader>Select a country to get started:</SubHeader>
          <DivHomeFlag >
            <LinkHomeFlag href="/india" > <Embed src={IndiaFlag} style={{ borderRadius: '50%', width: '230px', height: '160px' }} />India</LinkHomeFlag>

            <LinkHomeFlag href="/uk" > <Embed src={UKFlag} />UK</LinkHomeFlag>

            <LinkHomeFlag href="/poland" > <Embed src={PolandFlag} />Poland</LinkHomeFlag>

            <LinkHomeFlag href="/usa" > <Embed src={USAFlag} />USA</LinkHomeFlag>
          </DivHomeFlag>
        </Container>
      </Main>
    </>
  )
}

export default Home;