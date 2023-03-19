import styles from './CreateRecipe.module.css';

export const CreateRecipe = () => {
    return (
    <section id={styles["create-recipe"]}>
        <div className={styles["container"]}>
            <form id={styles["create-form"]}>
                <h2>Share your recipe</h2>
            
                <label htmlFor="dishName">Dish Name</label>
                <input type="text" placeholder="Enter Dish Name" name="dishName" / >

                <label htmlFor="description">Description</label>
                <input type="text" name="description" placeholder="Enter Description" />
    
                <label htmlFor="imageUrl">Dish Image</label>
                <input type="text" placeholder="Enter Dish Image" name="imageUrl" />

                <label htmlFor="serving">Servings</label>
                <input type="number" placeholder="Number of servings" name="serving" />

                <label htmlFor="ingredients">Ingredients</label>
                <textarea type="text" placeholder="ex: Flour - 500 gr.&#10;Eggs - 2&#10;" />

                <label htmlFor="preparation">Preparation</label>
                <textarea type="text" name="preparation" placeholder="Preparation instructions" />

                <input type="submit" className={styles["registerbtn"]} value="Post Recipe" />
            </form>
        </div>
    </section>

    );

};