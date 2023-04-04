import { useState, useEffect } from "react";

import { useAuthContext } from "../../contexts/AuthContext"
import { CatalogItem } from "../CatalogItem/CatalogItem";

import styles from './UserProfile.module.css';

export const UserProfile = () => {

    const { username, userId } = useAuthContext();
    const [recipes, setRecipes] = useState([]);

    const query = encodeURIComponent(`_ownerId="${userId}"`)

    useEffect(() => {
        fetch(`http://localhost:3030/data/recipes?where=${query}`)
            .then(res => res.json())
            .then(userRecipes => {
                if (userRecipes.message === 'Resource not found'){
                    setRecipes([])
                } else {
                    setRecipes(userRecipes)
                }
            })
    }, []);

    return (

        <div className={styles["listings"]}>  
                <h2>{username}'s Recipes List</h2>

                {recipes && recipes.length !== 0 && (
                    recipes.map(x => <CatalogItem key={x._id} {...x} />)
                )}

                {recipes.length === 0 && (
                    <div>
                        <p>No recipes uploaded by you</p>
                    </div>
                )}
            </div>
    );
};

