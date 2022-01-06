import '../StyleRecipeDesc.css'
import styled from 'styled-components';
import RecipeDescTitle from './RecipeDescTitle';
import RecipeDescGrid from './RecipeDescGrid';
import { useParams } from 'react-router';
import { Client } from './Client'
import { useState, useEffect } from 'react';

const DivMain = styled.div`
width: 100%;
margin: 50px auto 0px auto;
`;

const RecipeDesc = () => {

    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState([]);

    const fetchRecipeById = () => {
        console.log(recipeId)
        Client.getEntry(recipeId)
            .then(response => {
                console.log(response)
                setRecipe(response)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchRecipeById();
    }, [])

    return (
        <>
            <DivMain>
                <RecipeDescTitle recipeInfo={recipe} />
                <RecipeDescGrid recipeMethod={recipe} />
            </DivMain>
        </>
    )
}

export default RecipeDesc;