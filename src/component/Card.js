import styled from "styled-components";

const Card = (props) => {
  return (
    <>
    <CardDesign>
      <CardTH>{props.foodType}</CardTH>
      <CardContent>
      <CardImg></CardImg>
      <H3>title</H3>
      <P>description text description text description text description text description text </P>
      <A>Go to recipe</A>
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


const CardTH = styled.div`
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


const H3 = styled.h3 `
  color: black;
  font-weight: 700;
  margin: 0px;
  font-size: 1.6rem;
  text-align: left;

`

const CardImg = styled.img`
  width: 200px;
  height: 150px;
  background-color: grey;

`

const P = styled.p`
  color: black;
`
const A = styled.a`
color: blue;
`