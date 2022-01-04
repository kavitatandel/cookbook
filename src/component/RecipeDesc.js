import '../StyleRecipeDesc.css'
import styled from 'styled-components';
import RecipeDescTitle from './RecipeDescTitle';
import RecipeDescGrid from './RecipeDescGrid';

const DivMain = styled.div`
width: 100%;
margin: 50px auto 0px auto;
`;

const RecipeDesc = () => {
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