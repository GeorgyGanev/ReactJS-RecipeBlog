import * as requester from './requester';

export const createRecipe = async(recipeData) => {
    const result = await requester.post('/recipes', recipeData);

    return result;
}