import styles from './Home.module.css'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div id={styles['main-content']}>
            
            <h1>Home Page</h1>
        
            
            <div id={styles['welcome-container']}>
                <h1>Welcome to  RecipesBlog </h1>
                
                <h2>To see our recipies catalog  click the link below:</h2>
            
                    <div>
                        <Link to="/catalog" className={styles.button}>Listings</Link>
                    </div>
            </div>

            <div className={styles['search-container']}>
                <h1>Search</h1>
                <div className={styles['search-box']}>
                    <input id={styles["search-input"]} type="text" name="search" placeholder="Enter desired production year" />
                    <button className={styles["button-list"]}>Search</button>
                </div> 
            </div>
            
        </div>

    );

};