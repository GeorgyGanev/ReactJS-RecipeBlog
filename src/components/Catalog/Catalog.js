import styles from './Catalog.module.css';
import { CatalogItem } from '../CatalogItem/CatalogItem';

export const Catalog = ({
    recipes
}) => {
    return (
        <section id={styles["recipe-listings"]}>
        <h1>Recipes Catalog</h1>
        <div className={styles["listings"]}>

            {recipes.length !== 0
                ? recipes.map(x => (<CatalogItem  key={x._id} recipe={x} />))
                : <p className={styles["no-recipes"]}>No recipes in catalog</p>}

        </div>
        
    </section>
    );
};