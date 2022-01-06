import styled from "styled-components";
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <CardDesign>
        <CardHeader>{props.foodType}</CardHeader>
        <CardContent>
          <CardImg></CardImg>
          <CardH3>{props.title}</CardH3>
          <CardP> {props.description}</CardP>
          <Link to={`/recipedesc/2j4ISUOZOxa7vDMYIP7Dhf`}><CardA>Go to recipe »</CardA></Link>
        </CardContent>
      </CardDesign>
    </>
  );
};

export default Card;

const CardDesign = styled.div`
padding: 2px;
box-shadow: 0 0 3px rgba(0,0,0,.5);
`

const CardHeader = styled.div`
  background-color: orange;
  font-size: 1.8rem;
  letter-spacing: 2px;
  padding: 5px;
  // padding-left: 15px;
  color: black;
  font-variant: small-caps;
  height: 40px;
  textTransform: uppercase;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
padding: 22px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

const CardImg = styled.img`
  width: 200px;
  height: 150px;
  background-color: grey;
  margin-bottom: 10px;

`

const CardH3 = styled.h3`
  color: black;
  font-weight: 700;
  margin: 0px;
  font-size: 1.8rem;
  text-align: left;
  margin-bottom: 8px;

`

const CardP = styled.p`
  color: black;
  font-size: 1.1rem;
  line-height: 1.6rem;

`
const CardA = styled.a`
color: blue;
`