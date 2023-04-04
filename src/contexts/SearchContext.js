import { createContext, useContext, useState, useEffect } from 'react';

import { recipeServiceFactory } from '../../services/recipeService';

export const SearchContext = createContext();

export const SearchContextProvider = (
    {children}
) => {
    const recipeService = recipeServiceFactory();

    const [recipes, setRecipes] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const { formValues, onChangeHandler } = useForm({
        search: ''
    });

    useEffect(() => {
        fetch('http://localhost:3030/data/recipes?pageSize=3&sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(latestRecipes => {
                
                if (latestRecipes.message === 'Resource not found'){
                    setRecipes([]);
                } else {
                    setRecipes(latestRecipes);
                }
                
            })
    }, []);

    const onSearchSubmit = async () => {
        if (formValues.search !== ''){
            
            setShowSearchResult(true);

            const result = await recipeService.searchRecipe(formValues.search);
            
            setRecipes(result);
        } else {
            return;
        }
    };

    const serachValues = {
        recipes,
        showSearchResult,
        onSearchSubmit,
        onChangeHandler
    }

    return (
        <SearchContext.Provider value={serachValues} >
            {children}
        </SearchContext.Provider>
    )
};

