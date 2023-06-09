import { requestFactory }  from './requester';

const baseUrl = 'http://localhost:3030/data/recipes';

export const recipeServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
       const recipes = Object.values(result);
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

    const editRecipe = async (recipeId, data) => {
        const result = await request.put(`${baseUrl}/${recipeId}`, data);
        return result;
    }  

    const searchRecipe = async(name) => {
        const searchQuery = encodeURIComponent(`dishName LIKE "${name}"`);
        const result = await request.get(`${baseUrl}?where=${searchQuery}`);
        return result;     
    }

    return {
        getAll,
        createRecipe,
        getOne,
        editRecipe,
        searchRecipe,
        deleteRecipe
    };
};

