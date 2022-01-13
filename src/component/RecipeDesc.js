//import '../StyleRecipeDesc.css'
import styled from 'styled-components';
import RecipeDescTitle from './RecipeDescTitle';
import RecipeDescGrid from './RecipeDescGrid';
import { useParams } from 'react-router';
import { Client } from './Client'
import { useState, useEffect } from 'react';
import LoadingCircular from './LoadingCircular';
//import { devices } from './Devices';

const DivMain = styled.div`
width: 100%;
margin: 50px auto 0px auto;
`;

const DivMainErrorProgress = styled.div`
height:100vh;
min-height:800px;
width: auto;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 60px;
`;

//controls the size of the circular progress bar
const DivCircularProgressbar = styled.div`
width: 300px;
height: 300px;
`;

const RecipeDesc = () => {

    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchRecipeById = async () => {
        try {
            await Client.getEntry(recipeId)
                .then(response => {
                    console.log(response)
                    setRecipe(response)
                    setLoading(false)
                })
        }
        catch (error) {
            setError(true);
            console.log(error)
        };
    }

    useEffect(() => {
        fetchRecipeById();
    }, [])


    //if (loading) return <h1>Page is loading</h1>
    if (error) return (
        <DivMainErrorProgress>
            <h1>There is an error occured. Please try again later....</h1>
        </DivMainErrorProgress>
    )

    if (loading) return (
        <DivMainErrorProgress>
            <DivCircularProgressbar>
                <LoadingCircular />
            </DivCircularProgressbar>
        </DivMainErrorProgress>
    )


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