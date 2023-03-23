import { requestFactory }  from './requester';

const baseUrl = 'http://localhost:3030/data/recipes';

export const recipeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
       
        const recipes = Object.values(result);
        console.log(recipes)
        return recipes;
    };
    
    const createRecipe = async(recipeData) => {
        const result = await request.post(baseUrl, recipeData);
    
        return result;
    };

    const getOne = async (recipeId) => {
        const result = await request.get(`${baseUrl}/${recipeId}`);

        return result;
    };

    const deleteRecipe = (id) => {
        request.delete(`${baseUrl}/${id}`)
    };

    const editRecipe = (recipeId, data) => {
        request.put(`${baseUrl}/${recipeId}`, data);
    }

    return {
        getAll,
        createRecipe,
        getOne,
        editRecipe,
        deleteRecipe
    };
};

