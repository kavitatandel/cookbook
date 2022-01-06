import styled from "styled-components";
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
    <CardDesign>
      <CardHeader>{props.foodType}</CardHeader>
      <CardContent>
      <CardImg></CardImg>
      <CardH3>title</CardH3>
      <CardP>description text description text description text description text description text </CardP>
      <Link to={`/recipedesc/1`}>Go to recipe</Link>
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
  color: black;
  font-variant: small-caps;
  height: 40px;
  textTransform: uppercase;
  font-weight: 200;
`;

const CardContent = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

const CardImg = styled.img`
  width: 200px;
  height: 150px;
  background-color: grey;

`

const CardH3 = styled.h3 `
  color: black;
  font-weight: 700;
  margin: 0px;
  font-size: 1.6rem;
  text-align: left;

`

const CardP = styled.p`
  color: black;
`
const CardA = styled.a`
color: blue;
`