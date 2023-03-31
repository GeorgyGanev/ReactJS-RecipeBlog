import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (recipeId) => {
    const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&${relationQuery}`);

    const comment = Object.values(result);

    return comment;
};

export const addComment = async (recipeId, comment) => {
    const result = await request.post(baseUrl, {recipeId, comment});

    return result;
};

