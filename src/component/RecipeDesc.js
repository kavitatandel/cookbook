import '../StyleRecipeDesc.css'
import IndiaFlag from '../Images/IndiaFlag.jpg'
import StarterPoha from '../Images/StarterPoha.jpg'
import styled from 'styled-components';
import RecipeDescStyles from '../RecipeDescStyle'

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


const RecipeDesc = () => {
    return (
        <>
            <div classNameName="mainDivRecipeDescStarter">
                <div className="recipeDescImageAndTitleStarter">
                    <div className="recipeDescRecipeTitleStarter">
                        <table className="tableFlageAndTitle" style={{ width: '100%' }}>
                            <tr style={{ textAlign: 'left' }}>
                                <StyledTdImgCountry>
                                    <img src={IndiaFlag} alt="India Flag" className="recipeDescIndiaFlagStarter" />
                                </StyledTdImgCountry>
                                {/* <td className="imgCountry">
                                <img src={IndiaFlag} alt="India Flag" className="recipeDescIndiaFlagStarter" />
                            </td> */}
                                {/* <td className="countryName">
                                <h5>India</h5>
                                </td>
                            */}
                                <StyledTdCountryName>
                                    <h5CountryName>India</h5CountryName>
                                </StyledTdCountryName>
                            </tr>
                            <tr>
                                {/* <td colspan="2" className="recipeType">
                                <h4>Starter</h4>
                            </td> */}
                                <td colspan="2">
                                    {/* <RecipeDescStyles.StyledH4RecipeType>Starter</RecipeDescStyles.StyledH4RecipeType> */}
                                    <StyledH4RecipeType>Starter</StyledH4RecipeType>
                                </td>
                            </tr>
                            <tr>
                                {/* <td className="recipeName" colspan="2">
                                <h1>Poha</h1>
                            </td> */}
                                <StyledTdRecipeName colspan="2">
                                    <StyledH1RecipeName>Poha</StyledH1RecipeName>
                                </StyledTdRecipeName>
                            </tr>
                            <tr>
                                <td colspan="2">
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
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="recipeDescCountryImageStarter">
                        <img src={StarterPoha} alt="India Flag" />
                    </div>
                </div>
                <div className="gridContainerRecipeDesc">
                    <div className="gridItem mainCol">
                        <h4>Description</h4>
                    </div>
                    <div className="gridItem">
                        <p>This is a Breakfast item from India. It is made of rice flakes along with other indian spices.</p>
                    </div>
                    <div className="gridItem mainCol">
                        <h4>Ingredients</h4>
                    </div>
                    <div className="gridItem">
                        <div>
                            <table className="tableIngredients">
                                <tr>
                                    <td>
                                        <p>Poha(rice-flakes): </p>
                                    </td>
                                    <td>
                                        <p>1 cup</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Potatoes:</p>
                                    </td>
                                    <td>
                                        <p> 1 small (cut into small pieces)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Onion: </p>
                                    </td>
                                    <td>
                                        <p>1 small (cut into small pieces)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Kadi Patta: </p>
                                    </td>
                                    <td>
                                        <p>4-5 nos.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Mustard seeds: </p>
                                    </td>
                                    <td>
                                        <p>1/2 tsp </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Green Chillies: </p>
                                    </td>
                                    <td>
                                        <p>1-2 (cut into large pieces)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Salt: </p>
                                    </td>
                                    <td>
                                        <p>Salt: as per taste</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Turemeric powder: </p>
                                    </td>
                                    <td>
                                        <p>1/2 tsp</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Lemon juice: </p>
                                    </td>
                                    <td>
                                        <p>1/2 tsp</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Sugar: </p>
                                    </td>
                                    <td>
                                        <p>1/2 tsp</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Peanutes: </p>
                                    </td>
                                    <td>
                                        <p>1 tbsp(roasted)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Tal: </p>
                                    </td>
                                    <td>
                                        <p>1 tsp</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Coriander: </p>
                                    </td>
                                    <td>
                                        <p>1 tbsp for garnishing</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Oil: </p>
                                    </td>
                                    <td>
                                        <p>1 tbsp</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="gridItem mainCol">
                        <h4>Method</h4>
                    </div>
                    <div className="gridItem mainGridMethod" >
                        <div className="gridContainerMethod">
                            <div className="method">
                                <p>1. Add 2 cups of water into rice flakes, slightly wash them and drain the water immediately.
                                    Repeat this process twice.</p>
                            </div>
                            <div className="method">
                                <p>2. Add oil in a pan and heat it. Now add mustard seeds, kadi patta, green chillies,peanuts
                                    and fry for 30 seonds.</p>
                            </div>
                            <div className="method">
                                <p>3. Add onion and fry for 2 mins on medium flame. Now add potatoes and cook till its done.</p>
                            </div>
                            <div className="method">
                                <p>4. Meanwhile add turemeric powder, salt, lemon juice, sugar into washed rice flakes and mixed
                                    everything very well. </p>
                            </div>
                            <div className="method">
                                <p>5. Add rice flakes into cooked potatoes and mixed well.</p>
                            </div>
                            <div className="method">
                                <p>6. Garnish with coriander leaves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeDesc;