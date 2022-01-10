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
font-weight:100;
`;

const TableIngredients = styled.table`
width: 100%;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 1em;
font-weight:100;
`;

const TdTableIngredients = styled.td`
padding: 5px 30px 5px 0px;
font-weight:100;
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


const RecipeDescGrid = ({ recipeMethod }) => {

    return (
        <>
            <GridContainer>
                <GridItemMainCol>
                    <h4>Description</h4>
                </GridItemMainCol>
                <GridItem>
                    <p>{recipeMethod.fields.description}</p>
                </GridItem>
                <GridItemMainCol>
                    <h4>Ingredients</h4>
                </GridItemMainCol>
                <GridItem>
                    {/* <div> */}
                    <TableIngredients>
                        {recipeMethod.fields.ingredients.map((ingredient, index) => {
                            return (

                                <tr key={index}>
                                    <TdTableIngredients>{ingredient.name}</TdTableIngredients>
                                    <TdTableIngredients>{ingredient.quantity}</TdTableIngredients>
                                </tr>

                            )
                        })}

                    </TableIngredients>
                    {/* </div> */}
                </GridItem>
                <GridItemMainCol>
                    <h4>Method</h4>
                </GridItemMainCol>
                <DivMainGridMethod>
                    {recipeMethod.fields.recipeMethod && recipeMethod.fields.recipeMethod.map((method, index) => {
                        return (
                            <DivMethod key={index}>
                                {method.step}.  {method.value}
                            </DivMethod>
                        )
                    })}
                </DivMainGridMethod>
            </GridContainer>
        </>
    )
}

export default RecipeDescGrid;