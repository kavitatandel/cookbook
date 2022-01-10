//import '../StyleRecipeDesc.css'
import IndiaFlag from '../Images/IndiaFlag.png'
import StarterPoha from '../Images/StarterPoha.jpg'
import styled from 'styled-components';
import ShareRecipe from './ShareRecipe'
import UKFlag from '../Images/UKFlag.png'
import USAFlag from '../Images/USAFlag.png'
import PolandFlag from '../Images/PolandFlag.png'


const DivTitle = styled.div`
width: 80%;
width: auto;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 60px;
`;

const DivImageRecipe = styled.div`
display: inline-block;
width: auto;
vertical-align: middle;
margin-right: 10%;
`;

const DivTitleInner = styled.div`
display: inline-block;  
width: 100%;
vertical-align: middle;
margin-left: 10%;
`;

const TableFlageAndTitle = styled.table`
width: 100%;
display: inline-block;
`;

const ImgCountryFlag = styled.img`
width: 50px;
height: 50px;
`;

// const TdCountryName = styled.td`
// display: inline-block;
// text-align: left;
// `;

const H5CountryName = styled.h5`
padding: 0px 0px;
text-transform: uppercase;
font-weight: 600;
text-align:left;
padding:15px 0px 0px 10px;
`;

const TrCountryInfo = styled.tr`
text-align:left;
`;

const TdCountryInfo = styled.td`
display:flex;
text-align:left;
`;

const ImageFood = styled.img` 
width: 450px;
height: 310px;
`;

const H4RecipeType = styled.h4`
text-align: left;
color: orange;
opacity: 1;
text-transform: uppercase;
letter-spacing: 3px;
font-weight: 900;
padding-top:10px;
`;

const TdRecipeName = styled.td`
color: black;
opacity: 1;
letter-spacing: 5px;
`;

const H1RecipeName = styled.h1`
font-size: 5rem;
padding-left: 0px;
margin-left: 0px;
text-align: left;
margin-block-start: 0px;
color:black;
opacity:1;
letter-spacing:5px;
`;


const RecipeDescTitle = ({ recipeInfo }) => {

    return (
        <>
            <DivTitle>
                <DivTitleInner>
                    <TableFlageAndTitle>
                        <TrCountryInfo>
                            <TdCountryInfo>
                                <ImgCountryFlag src={recipeInfo.fields.countryName[0] === 'India'
                                    ? IndiaFlag
                                    : recipeInfo.fields.countryName[0] === 'UK'
                                        ? UKFlag
                                        : recipeInfo.fields.countryName[0] === 'USA'
                                            ? USAFlag : PolandFlag
                                } alt="Country Flag" />
                                <H5CountryName>{recipeInfo.fields.countryName[0]}</H5CountryName>
                                {/* <H5CountryName>India</H5CountryName> */}
                            </TdCountryInfo>
                        </TrCountryInfo>
                        <TrCountryInfo>
                            <TdCountryInfo>
                                <H4RecipeType>{recipeInfo.fields.foodType[0]}</H4RecipeType>
                            </TdCountryInfo>
                        </TrCountryInfo>
                        <TrCountryInfo>
                            <TdCountryInfo>
                                <H1RecipeName>{recipeInfo.fields.title}</H1RecipeName>
                            </TdCountryInfo>
                        </TrCountryInfo>
                        <TrCountryInfo>
                            <TdCountryInfo>
                                <ShareRecipe />
                            </TdCountryInfo>
                        </TrCountryInfo>
                    </TableFlageAndTitle>
                </DivTitleInner>
                <DivImageRecipe>
                    <ImageFood src={recipeInfo.fields.image.fields.file.url} alt={recipeInfo.fields.image.fields.title} />
                </DivImageRecipe>
            </DivTitle>
        </>
    )
}

export default RecipeDescTitle;