import styles from './CatalogItem.module.css';
import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    imageUrl,
    dishName,
    description,

}) => {
    
    return (
    <div className={styles["listing"]}>
        <div className={styles["preview"]}>
            <img src={imageUrl} alt="recipe"/>
        </div>
        <h2>{dishName}</h2>
        <div className={styles["info"]}>
            <div className={styles["data-info"]}>
                <h3>{description} </h3>
            </div>
            <div className={styles["data-buttons"]}>
                <Link to={`/catalog/${_id}`} className={styles["button-recipeDetails"]}>Details</Link>
            </div>
        </div>
    </div>
    );
};


