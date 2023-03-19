import * as requester from './requester';

export const getAll = async() => {
    const result = await requester.get('/recipes')
    const recipes = Object.values(result);
    return recipes;
}

export const createRecipe = async(recipeData) => {
    const result = await requester.post('/recipes', recipeData);

    return result;
}