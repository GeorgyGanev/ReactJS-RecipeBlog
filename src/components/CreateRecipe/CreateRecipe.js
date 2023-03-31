import styles from './CreateRecipe.module.css';

import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../../contexts/RecipeContex';

export const CreateRecipe = () => {

    const {onCreateRecipeSubmit} = useRecipeContext();
    const { formValues, onChangeHandler, onSubmit, errors, checkLength, urlCheck } = useForm({
        dishName: '',
        description: '',
        imageUrl: '',
        servings: '',
        ingredients: '',
        preparation: ''

    }, onCreateRecipeSubmit);

    return (
    <section id={styles["create-recipe"]}>
        <div className={styles["container"]}>
            <form method='post' id={styles["create-form"]} onSubmit={onSubmit}>
                <h2>Share your recipe</h2>
            
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

                <input type="submit" className={styles["registerbtn"]} value="Post Recipe" />
            </form>
           <Link to={'/catalog'}>Cancel</Link>
        </div>
    </section>

    );

};