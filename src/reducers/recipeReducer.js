export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'RECIPE_FETCH':
            return {...action.payload};
        
        case 'RECIPE_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail
                        }
                    }
                ],
            }
        default:
            return state;
    }
};