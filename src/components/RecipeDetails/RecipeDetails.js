import styles from './RecipeDetails.module.css';
import { useState, useEffect, useContext, useReducer} from 'react';
import { Link, useParams } from 'react-router-dom';

import { recipeServiceFactory } from '../../services/recipeService';
import * as commentService from '../../services/commentService'

import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';
import { useRecipeContext } from '../../contexts/RecipeContex';
import { AddComment } from './AddComment/AddComment';

export const RecipeDetails = () => {
    const { onDeleteHandler } = useRecipeContext();
    const { userId, username, isAuthenticated } = useContext(AuthContext);
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});
    const [showComment, setShowComment] = useState(false);
    const recipeService = useService(recipeServiceFactory);
   
    useEffect(() => {
        Promise.all([
            recipeService.getOne(recipeId),
            commentService.getAll(recipeId)
        ]).then(([recipeData, comments]) => {
            setRecipe({
                ...recipeData,
                comments
            })
        });
    }, [recipeId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.addComment(recipeId, values.comment);

        setRecipe(state => ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...response,
                    author: {
                        username
                    }
                }
            ]
        }))
    };

    const onCommentShowClick = () => {
        setShowComment(!showComment);
    }

    const isOwner = recipe._ownerId === userId;

    return (
        <section id={styles["listing-details"]}>
            <h2>{recipe.dishName}</h2>
            <h3>{recipe.description} - {recipe.servings} servings</h3>
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
                
                <div className={styles["listings-buttons"]}>
                        {isOwner && (
                            <div className={styles['owner']}>
                                <Link to={`/catalog/${recipeId}/edit`} className={styles["button-list"]}>Edit</Link>
                                <button onClick={() => onDeleteHandler(recipeId)} className={styles["button-list"]}>Delete</button>
                            </div>
                        )}

                        <Link to={'/catalog'} className={styles["button-list"]}>Back</Link>
                        <button onClick={onCommentShowClick} className={styles["button-list"]}>Comments</button>
                </div>
                
                {showComment && (
                    <div className={styles["comment-section"]}>
                    <div className={styles["comment-top"]}>
                        <div className={styles["user-details"]}>
                            <ul className={styles["listing-props"]}>

                            {recipe.comments && recipe.comments.map(x => (
                                <li key={x._id}>
                                    <p><b>{x.author.username}</b>: {x.comment}</p>
                                </li>
                            ))}

                            {recipe.comments && recipe.comments.length === 0 && (
                                <p>No comments yet</p>
                            )}
                            </ul>
                            
                        </div>
                    </div>
                   
                   {!isOwner && isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
                    
                </div>
                )}
                
        
            </div>
        </section>
    );
};