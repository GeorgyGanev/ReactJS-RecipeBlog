import { createContext, useContext, useState, useEffect } from 'react';

import { recipeServiceFactory } from '../services/recipeService';
import { useForm } from '../hooks/useForm';

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
            formValues.search = '';

        } else {
            return;
        }
    };

    const searchValues = {
        recipes,
        formValues,
        showSearchResult,
        onSearchSubmit,
        onChangeHandler
    }

    return (
        <SearchContext.Provider value={searchValues} >
            {children}
        </SearchContext.Provider>
    )
};

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    return context;
}

