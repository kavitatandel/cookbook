import '../StyleRecipeDesc.css'
import IndiaFlag from '../Images/IndiaFlag.jpg'
import StarterPoha from '../Images/StarterPoha.jpg'
import styled from 'styled-components';

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
`;

// const TdImgCountry = styled.td`
// display: inline-block;
// text-align: left;
// `;

const TrCountryInfo = styled.tr`
text-align:left;
`;

const TdCountryInfo = styled.td`
text-align:left;
`;


//this if for image size of the food
//currently not working
const ImageFood = styled.image` 
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


const RecipeDescTitle = () => {
    return (
        <>
            <DivTitle>
                <DivTitleInner>
                    <TableFlageAndTitle>
                        {/* <tr style={{ textAlign: 'left' }}> */}
                        <TrCountryInfo>
                            <TdCountryInfo>
                                <ImgCountryFlag src={IndiaFlag} alt="Country Flag" />
                            </TdCountryInfo>
                            <TdCountryInfo>
                                <H5CountryName>India</H5CountryName>
                            </TdCountryInfo>
                        </TrCountryInfo>
                        <TrCountryInfo>
                            <TdCountryInfo colspan="2">
                                <H4RecipeType>Starter</H4RecipeType>
                            </TdCountryInfo>
                        </TrCountryInfo>
                        <TrCountryInfo>
                            <TdCountryInfo colspan="2">
                                <H1RecipeName>Poha</H1RecipeName>
                            </TdCountryInfo>
                        </TrCountryInfo>
                        <TrCountryInfo>
                            <TdCountryInfo colspan="2">
                                <div className="shareBasic">
                                    <div className="social">
                                        <a href="#" name="instagram" id="linkInsta">
                                            <i className="icon ion-social-instagram"></i></a><a href="#" name="snapchat"
                                                id="linkSnapchat"><i className="icon ion-social-snapchat"></i></a><a href="#"
                                                    name="twitter" id="linkTwitter"><i className="icon ion-social-twitter"></i></a><a
                                                        href="#" name="facebook" id="linkFacebook"><i
                                                            className="icon ion-social-facebook"></i></a><label name="lblShareRecipe">Share
                                        </label>
                                    </div>
                                </div>
                            </TdCountryInfo>
                        </TrCountryInfo>
                    </TableFlageAndTitle>
                </DivTitleInner>
                <DivImageRecipe>
                    <img src={StarterPoha} alt="India Flag" />
                </DivImageRecipe>
            </DivTitle>
        </>
    )
}

export default RecipeDescTitle;