import styles from './CatalogItem.module.css';
import { Link } from 'react-router-dom';

export const CatalogItem = ({
    recipe
}) => {

    return (
        <div className={styles["listing"]}>
        <div className={styles["preview"]}>
            <img src={recipe.imageUrl} alt="recipe"/>
        </div>
        <h2>{recipe.dishName}</h2>
        <div className={styles["info"]}>
            <div className={styles["data-info"]}>
                <h3>{recipe.description} </h3>
            </div>
            <div className={styles["data-buttons"]}>
                <Link to='' className={styles["button-recipeDetails"]}>Details</Link>
            </div>
        </div>
    </div>
    );
};