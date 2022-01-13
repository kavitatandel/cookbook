import styled from 'styled-components';
import IndiaFlag from './Images/IndiaFlag.png';
import USAFlag from './Images/united-states.svg';
import UKFlag from './Images/united-kingdom.svg';
import PolandFlag from './Images/poland3.jpg';
import BackgroundImage from './Images/home-background.png'

//background-image: url("Images/home-background.png");
const Main = styled.main`
display:flex;
background-size: cover;
width: 100%;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
min-height:600px;
`;

const Header = styled.h1`
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 50px;
font-weight: 600;
color: white;
margin-top: 45px;
vertical-align:middle;
  `;


const SubHeader = styled.h2`
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 32px;
font-weight: 400;
color: white;
  `;

//background-image: url("Images/home-background.png");
const Container = styled.div`
display:flex;
background-size: cover;
width: 100%;
height: 100vh;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
min-height:600px;
justify-content:center;
`;


const DivHomeFlag = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-around;
margin: 20px;
margin-bottom: 5%;
max-width: 1000px;  
`;


const LinkHomeFlag = styled.a`
width: 22%;
color: white;
text-align: center;
font-family: "Raleway", sans-serif;
font-size: 24px;
font-weight: 400;
color: white;
  `;

  const Embed = styled.embed`
  border-radius: 50%;
  borderRadius: 50%;
  width: 230px;
  height: 160px; 
  `;



const Home = () => {
  return (
    <>
      <Main >
        <Container style={{ backgroundImage: `url(${BackgroundImage})` }}>

          <Header>Discover the World of Spicy Food!</Header>

          <SubHeader>Select a country to get started:</SubHeader>
          <DivHomeFlag>
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