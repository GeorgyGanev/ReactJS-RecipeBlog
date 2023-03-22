import styles from './RecipeDetails.module.css';
import { useState, useEffect, useContext} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { recipeServiceFactory } from '../../services/recipeService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const RecipeDetails = () => {
    const { userId } = useContext(AuthContext);
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});
    const recipeService = useService(recipeServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            })
    }, [recipeId]);

    const isOwner = recipe._ownerId === userId;

    return (
        <section id={styles["listing-details"]}>
            <h2>{recipe.dishName}</h2>
            <div className={styles["details-info"]}>
                <img src={recipe.imageUrl} alt='img' />
                
                <div className={styles['ingredientsList']}>
                    <h3>Ingredients List:</h3>
                    <ul className={styles["listing-props"]}>
                        {recipe.ingredients?.split('\n').map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                     </ul>
                </div>

                <div className={styles['preparation']}>
                    <h3>Preparation Steps:</h3>
                    <ul className={styles["listing-props"]}>
                       {recipe.preparation?.split('\n').map((x, i) => (
                        <li key={i}>{x}</li>
                       ))}
                     </ul>
                </div>
                
                {isOwner && (
                    <div className={styles["listings-buttons"]}>
                    <Link to="#" className="button-list">Edit</Link>
                    <Link to="#" className="button-list">Delete</Link>
                </div>
                )}
                
            </div>
        </section>
    );
};