import styles from './CreateRecipe.module.css';

export const CreateRecipe = () => {
    return (
    <section id={styles["create-recipe"]}>
        <div className={styles["container"]}>
            <form id={styles["create-form"]}>
                <h2>Share your recipe</h2>
            
                <label htmlFor="dishName">Dish Name</label>
                <input type="text" placeholder="Enter Dish Name" name="dishName" / >

                <label htmlFor="model">Car Model</label>
                <input type="text" placeholder="Enter Car Model" name="model" />

                <label htmlFor="description">Description</label>
                <input type="text" placeholder="Enter Description" name="description" />

                <label htmlFor="year">Car Year</label>
                <input type="number" placeholder="Enter Car Year" name="year" />

                <label htmlFor="imageUrl">Car Image</label>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" />

                <label htmlFor="price">Car Price</label>
                <input type="number" placeholder="Enter Car Price" name="price" />

                <input type="submit" className={styles["registerbtn"]} value="Create Listing" />
            </form>
        </div>
    </section>

    );

};