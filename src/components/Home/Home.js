import styles from './Home.module.css'
import { Link } from 'react-router-dom';

import { useRecipeContext } from '../../contexts/RecipeContex'

import { CatalogItem } from '../CatalogItem/CatalogItem';

export const Home = () => {

    const { recipes } = useRecipeContext();
    const lastThreeRecipes = recipes.slice(-4).reverse(); 

    return (
        <div id={styles['main']}>
            
            <div id={styles['welcome-container']}>
                <h1>Welcome to  RecipesBlog </h1>
            </div>
            
            <div className={styles['search-container']}>
                <h3>Search for Recipe</h3>
                <div className={styles['search-box']}>
                    <input id={styles["search-input"]} type="text" name="search" placeholder="Enter desired production year" />
                    <button className={styles["button-list"]}>Search</button>
                </div> 
            </div>

            <div class={styles["listings"]}>
                
                <h2>Latest Recipes</h2>

                {lastThreeRecipes && lastThreeRecipes !== 0 && (
                    lastThreeRecipes.map(x => <CatalogItem key={x._id} {...x} />)
                )}
                    {/* <div>
                        <Link to="/catalog" className={styles.button}>Listings</Link>
                    </div> */}
            </div>


        </div>
    );
};