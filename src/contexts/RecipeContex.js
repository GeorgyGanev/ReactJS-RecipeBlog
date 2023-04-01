import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { recipeServiceFactory } from "../services/recipeService";

export const RecipeContext = createContext();

export const RecipeProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const recipeService = recipeServiceFactory();

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result)
            })
    }, []);

    const onCreateRecipeSubmit = async (recipeData) => {
        const newRecipe = await recipeService.createRecipe(recipeData);
  
        setRecipes(state => [...state, newRecipe]);
  
        navigate('/catalog');
    };
  
    const onDeleteHandler = async (recipeId) => {
        
        const confirm = window.confirm('Are you sure you want to delete this recipe');

        if (confirm) {

            await recipeService.deleteRecipe(recipeId);
            setRecipes(state =>  state.filter(x => x._id !== recipeId))
            
            navigate('/catalog');
        } else {
            return;
        }
  }
  
  const onRecipeEditSubmit = async (values) => {
  
      const result = await recipeService.editRecipe (values._id, values);
  
      setRecipes(state => state.map(x => x._id === values._id ? result : x));
  
      navigate(`/catalog/${values._id}`);
  }

  const contextValues = {
    recipes,
    onCreateRecipeSubmit,
    onDeleteHandler, 
    onRecipeEditSubmit
  }

  return (
    <RecipeContext.Provider value={contextValues}>
        {children}
    </RecipeContext.Provider>
  )
};

export const useRecipeContext = () => {
    const context = useContext(RecipeContext);

    return context;
};
