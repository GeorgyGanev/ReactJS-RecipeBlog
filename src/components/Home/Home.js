import styles from './Home.module.css'

import { useState, useEffect } from 'react';

import { CatalogItem } from '../CatalogItem/CatalogItem';
import { useForm } from '../../hooks/useForm';

import { recipeServiceFactory } from '../../services/recipeService';

export const Home = () => {

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

    return (
        <div id={styles['main']}>
            
            <div id={styles['welcome-container']}>
                <h1>Welcome to  RecipesBlog </h1>
            </div>
            
            <div className={styles['search-container']}>
                <h3>Search for Recipe</h3>
                <div className={styles['search-box']}>
                    <input id={styles["search-input"]} type="text" name="search" value={formValues.search} onChange={onChangeHandler} />
                    <button onClick={onSearchSubmit} className={styles["button-list"]}>Search</button>
                </div> 
            </div>

            {!showSearchResult && (
            <div className={styles["listings"]}>  
                <h2>Latest Recipes</h2>

                {recipes && recipes.length !== 0 && (
                    recipes.map(x => <CatalogItem key={x._id} {...x} />)
                )}

                {recipes.length === 0 && (
                    <div>
                        <p>No recipes in catalog</p>
                    </div>
                )}
            </div>
            )}

            {showSearchResult && (
                <div className={styles["listings"]}>  
                <h2>Search Results</h2>

                {recipes && recipes !== 0 && (
                    recipes.map(x => <CatalogItem key={x._id} {...x} />)
                )}

                {recipes.length === 0 && (
                    <div>
                        <p>No results</p>
                    </div>
                )}
            </div>
            )}
        </div>
    );
};