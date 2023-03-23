import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { recipeServiceFactory } from '../../services/recipeService';

import styles from './EditRecipe.module.css';

export const EditRecipe = ({
    onRecipeEditSubmit
}) => {
    const navigate = useNavigate();
    const { recipeId } = useParams(); 
    const recipeService = useService(recipeServiceFactory);

    const { formValues, onChangeHandler, onSubmit, errors, checkLength, urlCheck, changeFormValues } = useForm({
        dishName: '',
        description: '',
        imageUrl: '',
        servings: '',
        ingredients: '',
        preparation: ''
    }, onRecipeEditSubmit );

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                changeFormValues(result);
            })
    }, [recipeId]);

    return (
        <section id={styles["create-recipe"]}>
        <div className={styles["container"]}>
            <form method='post' id={styles["create-form"]} onSubmit={onSubmit}>
                <h2>Edit your recipe</h2>
            
                <label htmlFor="dishName">Dish Name</label>
                <input type="text" placeholder="Enter Dish Name" name="dishName" value={formValues.dishName} onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1, 20)} / >
                    {errors.dishName && 
                    <p className={styles["warning-message"]}>Please fill in the dish name!</p>}

                <label htmlFor="description">Description</label>
                <input type="text" name="description" placeholder="Enter Description" value={formValues.description} onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1, 20)} />
                    {errors.description && 
                    <p className={styles["warning-message"]}>Please provide description!</p>}

                <label htmlFor="imageUrl">Dish Image</label>
                <input type="text" placeholder="Enter Dish Image" name="imageUrl" value={formValues.imageUrl} onChange={onChangeHandler} onBlur={(e) => urlCheck(e)} />
                    {errors.imageUrl && 
                    <p className={styles["warning-message"]}>Invalid URL!</p>}

                <label htmlFor="serving">Servings</label>
                <input type="number" placeholder="Number of servings" name="servings" value={formValues.servings} onChange={onChangeHandler} />

                <label htmlFor="ingredients">Ingredients</label>
                <textarea type="text" name="ingredients" placeholder="ex: Flour - 500 gr.&#10;Eggs - 2&#10;" value={formValues.ingredients} onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1)} />
                    {errors.ingredients && 
                    <p className={styles["warning-message"]}>Please provide list of ingredients!</p>}

                <label htmlFor="preparation">Preparation</label>
                <textarea type="text" name="preparation" placeholder="Preparation instructions" value={formValues.preparation} onChange={onChangeHandler} onBlur={(e) => checkLength(e, 1)} />
                    {errors.preparation && 
                    <p className={styles["warning-message"]}>Please provide preparation instructions!</p>}

                <button type="submit" className={styles["registerbtn"]}>Edit</button>
                <Link to={`/catalog/${recipeId}`} className={styles["registerbtn"]}>Back</Link>
                
            </form>

           
               
        </div>
    </section>
    );
};