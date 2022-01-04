import styled from 'styled-components';

const RecipeDescStyles = () => {

    const StyledTdCountryName = styled.td`
display: inline-block;
text-align: left;
`;

    const StyledH5CountryName = styled.h5`
background-color:red;
padding: 0px;
text-transform: uppercase;
font-weight: 400;
color:white;
`;

    const StyledTdImgCountry = styled.td`
display: inline-block;
text-align: left;
`;

    const StyledH4RecipeType = styled.h4`
text-align: left;
color: orange;
opacity: 1;
text-transform: uppercase;
letter-spacing: 3px;
font-weight: 900;
`;

    const StyledTdRecipeName = styled.td`
    color: black;
    opacity: 1;
    letter-spacing: 5px;
  `;

    const StyledH1RecipeName = styled.h1`
  font-size: 5rem;
  padding-left: 0px;
  margin-left: 0px;
  text-align: left;
  margin-block-start: 0px;
`;

}

export default RecipeDescStyles;

