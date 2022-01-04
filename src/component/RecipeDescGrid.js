import styled from 'styled-components';

/* minmax(0, 1fr)- track's flex factor. here it takes
remaining portion of the track when overflow the content     */
const GridContainer = styled.div`
width: 80%;
display: grid;
grid-column-gap: 0px;
row-gap: 0px;
grid-template-columns: auto minmax(0, 1fr);
background-color: white;
justify-content: center;
margin-left: 10%;
margin-bottom: 50px;
`;

const GridItem = styled.div`
width: 100%;
background-color: white;
border: 1px solid rgba(117, 116, 114, 0.8);
padding: 20px;
margin: 0px 0px;
text-align: left;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 1em;
`;

const GridItemMainCol = styled.div`
width: 100%;
background-color: white;
border: 1px solid rgba(117, 116, 114, 0.8);
padding: 20px;
margin: 0px 0px;
text-align: left;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 1em;
background-color: rgba(241, 201, 22, 0.5);
`;

const TableIngredients = styled.table`
width: 100%;
`;

const TdTableIngredients = styled.td`
padding: 5px 30px 5px 0px;
`;

const DivMainGridMethod = styled.div`
width: 100%;
background-color: white;
border: 1px solid rgba(117, 116, 114, 0.8);
padding: 20px;
margin: 0px 0px;
text-align: left;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 1em;
display: grid;
grid-template-columns: auto;
`;

//padding-bottom: 0px;
const DivMethod = styled.div`
padding-top:5px;
padding-bottom:5px;
`;


const RecipeDescGrid = () => {
    return (
        <>
            <GridContainer>
                <GridItemMainCol>
                    <h4>Description</h4>
                </GridItemMainCol>
                <GridItem>
                    <p>This is a Breakfast item from India. It is made of rice flakes along with other indian spices.</p>
                </GridItem>
                <GridItemMainCol>
                    <h4>Ingredients</h4>
                </GridItemMainCol>
                <GridItem>
                    <div>
                        <TableIngredients>
                            <tr>
                                <TdTableIngredients>
                                    <p>Poha(rice-flakes): </p>
                                </TdTableIngredients>
                                <TdTableIngredients>
                                    <p>1 cup</p>
                                </TdTableIngredients>
                            </tr>
                            <tr>
                                <TdTableIngredients>
                                    <p>Potatoes:</p>
                                </TdTableIngredients>
                                <TdTableIngredients>
                                    <p> 1 small (cut into small pieces)</p>
                                </TdTableIngredients>
                            </tr>
                            <tr>
                                <TdTableIngredients>
                                    <p>Onion: </p>
                                </TdTableIngredients>
                                <TdTableIngredients>
                                    <p>1 small (cut into small pieces)</p>
                                </TdTableIngredients>
                            </tr>
                            <tr>
                                <TdTableIngredients>
                                    <p>Kadi Patta: </p>
                                </TdTableIngredients>
                                <TdTableIngredients>
                                    <p>4-5 nos.</p>
                                </TdTableIngredients>
                            </tr>
                            <tr>
                                <TdTableIngredients>
                                    <p>Mustard seeds: </p>
                                </TdTableIngredients>
                                <TdTableIngredients>
                                    <p>1/2 tsp </p>
                                </TdTableIngredients>
                            </tr>
                            <tr>
                                <TdTableIngredients>
                                    <p>Green Chillies: </p>
                                </TdTableIngredients>
                                <TdTableIngredients>
                                    <p>1-2 (cut into large pieces)</p>
                                </TdTableIngredients>
                            </tr>

                        </TableIngredients>
                    </div>
                </GridItem>
                <GridItemMainCol>
                    <h4>Method</h4>
                </GridItemMainCol>
                <DivMainGridMethod>
                    <div>
                        <DivMethod>
                            <p>1. Add 2 cups of water into rice flakes, slightly wash them and drain the water immediately.
                                Repeat this process twice.</p>
                        </DivMethod>
                        <DivMethod>
                            <p>2. Add oil in a pan and heat it. Now add mustard seeds, kadi patta, green chillies,peanuts
                                and fry for 30 seonds.</p>
                        </DivMethod>
                        <DivMethod>
                            <p>3. Add onion and fry for 2 mins on medium flame. Now add potatoes and cook till its done.</p>
                        </DivMethod>
                        <DivMethod>
                            <p>4. Meanwhile add turemeric powder, salt, lemon juice, sugar into washed rice flakes and mixed
                                everything very well. </p>
                        </DivMethod>
                        <DivMethod>
                            <p>5. Add rice flakes into cooked potatoes and mixed well.</p>
                        </DivMethod>
                        <DivMethod>
                            <p>6. Garnish with coriander leaves.</p>
                        </DivMethod>
                    </div>
                </DivMainGridMethod>
            </GridContainer>
        </>
    )
}

export default RecipeDescGrid;