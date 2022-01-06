import '../StyleRecipeDesc.css'
import styled from 'styled-components';
import RecipeDescTitle from './RecipeDescTitle';
import RecipeDescGrid from './RecipeDescGrid';
import { useParams } from 'react-router';

const DivMain = styled.div`
width: 100%;
margin: 50px auto 0px auto;
`;

const RecipeDesc = () => {

    //const recipeId=useParams();
    const recipeId = 1;


    const fetchRecipeById = () => {

    }

    return (
        <>
            <DivMain>
                <RecipeDescTitle />
                <RecipeDescGrid />
            </DivMain>
        </>
    )
}

export default RecipeDesc;