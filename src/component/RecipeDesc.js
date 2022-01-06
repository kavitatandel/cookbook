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

    const recipeId = useParams();
    //const recipeId = 1;
    console.log(recipeId);

    const [recipe, setRecipe] = useState([]);

    const fetchRecipeById = () => {
        Client.getEntries({ 'metadata.tags.sys.Id[all]': '1' })
            .then(response => {
                console.log(response.items);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchRecipeById();
    }, [])

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