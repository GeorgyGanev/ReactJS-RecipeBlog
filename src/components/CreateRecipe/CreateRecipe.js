import styles from './CreateRecipe.module.css';

import { useForm } from '../../hooks/useForm';

export const CreateRecipe = ({
    onCreateRecipeSubmit
}) => {
    const { formValues, onChangeHandler, onSubmit } = useForm({
        dishName: '',
        description: '',
        imageUrl: '',
        servings: '',
        ingredients: '',
        preparation: ''

    }, onCreateRecipeSubmit)

    return (
    <section id={styles["create-recipe"]}>
        <div className={styles["container"]}>
            <form id={styles["create-form"]} onSubmit={onSubmit}>
                <h2>Share your recipe</h2>
            
                <label htmlFor="dishName">Dish Name</label>
                <input type="text" placeholder="Enter Dish Name" name="dishName" value={formValues.dishName} onChange={onChangeHandler} / >

                <label htmlFor="description">Description</label>
                <input type="text" name="description" placeholder="Enter Description" value={formValues.description} onChange={onChangeHandler} />
    
                <label htmlFor="imageUrl">Dish Image</label>
                <input type="text" placeholder="Enter Dish Image" name="imageUrl" value={formValues.imageUrl} onChange={onChangeHandler} />

                <label htmlFor="serving">Servings</label>
                <input type="number" placeholder="Number of servings" name="servings" value={formValues.servings} onChange={onChangeHandler} />

                <label htmlFor="ingredients">Ingredients</label>
                <textarea type="text" name="ingredients" placeholder="ex: Flour - 500 gr.&#10;Eggs - 2&#10;" value={formValues.ingredients} onChange={onChangeHandler} />

                <label htmlFor="preparation">Preparation</label>
                <textarea type="text" name="preparation" placeholder="Preparation instructions" value={formValues.preparation} onChange={onChangeHandler} />

                <input type="submit" className={styles["registerbtn"]} value="Post Recipe" />
            </form>
        </div>
    </section>

    );

};