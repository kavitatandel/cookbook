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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchRecipeById = async () => {
        console.log(recipeId)
        await Client.getEntry(recipeId)
            .then(response => {
                console.log(response)
                setRecipe(response)
                setLoading(false)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchRecipeById();
    }, [])

    if (loading) return <h1>Page is loading</h1>
    if (error) return <h1>There is an error occured. Please try again later....</h1>
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