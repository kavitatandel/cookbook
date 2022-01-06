import styled from 'styled-components';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 1em;
font-weight:normal;
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

//for rendering rich-text.Not working
const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => `<custom-bold>${text}<custom-bold>`,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, next) =>
            `<custom-paragraph>${next(node.content)}</custom-paragraph>`,
    },
    [BLOCKS.LIST_ITEM]: (node, next) =>
        `<custom-listitem>${next(node.content)}</custom-listitem>`,
}

// const Bold = ({ children }) => <span className="bold">{children}</span>;
// const Text = ({ children }) => <p className="align-center">{children}</p>;
// const option = {
//     renderMark: {
//         [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
//     },
//     renderNode: {
//         [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//     }
// };

const RecipeDescGrid = ({ recipeMethod }) => {


    console.log("inside Recipe Grid")
    //console.log(documentToHtmlString(recipeMethod.fields.method, options));

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
                    <div>
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
                    </div>
                </GridItem>
                <GridItemMainCol>
                    <h4>Method</h4>
                </GridItemMainCol>
                <DivMainGridMethod>
                    <div>
                        <DivMethod>
                            {documentToHtmlString(recipeMethod.fields.method)}
                        </DivMethod>
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