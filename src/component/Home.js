import styled from 'styled-components';
//import IndiaFlag from '../Images/india.svg';
import USAFlag from '../Images/united-states.svg';
import UKFlag from '../Images/united-kingdom.svg';
// import PolandFlag from '../Images/poland.svg';
//import PolandFlag from '../Images/Poland.jpg';
import BackgroundImage from '../Images/home-background.png'

//background-image: url("Images/home-background.png");
const Main = styled.main`

background-size: cover;
width: 100%;
height: auto;
background-position: center;
background-repeat: no-repeat;
`;

const Header = styled.h1`
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 50px;
font-weight: 600;
color: black;
margin-top: 45px;
  `;


const SubHeader = styled.h2`
font-family: "Raleway", sans-serif;
text-align: center;
font-size: 32px;
font-weight: 400;
color: black;
  `;

//background-image: url("Images/home-background.png");
const Container = styled.div`

background-size: cover;
width: 100%;
height: auto;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
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
`;



const Home = () => {
  return (
    <>
      <Main >
        <Container style={{ backgroundImage: { BackgroundImage } }}>

          <Header>Discover the World of Spicy Food!</Header>

          <SubHeader>Select a country to get started:</SubHeader>
          <DivHomeFlag>
            <LinkHomeFlag href="CountryFoodIndia.html" > <Embed src={UKFlag} />India</LinkHomeFlag>

            <LinkHomeFlag href="CountryFoodUK.html" > <Embed src={UKFlag} />UK</LinkHomeFlag>

            <LinkHomeFlag href="CountryFoodPoland.html" > <Embed src={USAFlag} />Poland</LinkHomeFlag>

            <LinkHomeFlag href="CountryFoodUSA.html" > <Embed src={USAFlag} />USA</LinkHomeFlag>
          </DivHomeFlag>
        </Container>
      </Main>
    </>
  )
}

export default Home;