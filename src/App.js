import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { recipeServiceFactory }from './services/recipeService';
import { AuthProvider } from './contexts/AuthContext';
 
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';
import { Catalog } from './components/Catalog/Catalog';
import { Logout } from './components/Logout/Logout';
import { RecipeDetails } from './components/RecipeDetails/RecipeDetails';
import { EditRecipe } from './components/EditRecipe/EditRecipe';

function App() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const recipeService = recipeServiceFactory();

  useEffect(() => {
    recipeService.getAll()
      .then(result => {
            setRecipes(result);          
      })
  }, []);

  const onCreateRecipeSubmit = async (recipeData) => {
      const newRecipe = await recipeService.createRecipe(recipeData);

      setRecipes(state => [...state, newRecipe]);

      navigate('/catalog');
  };

  const onDeleteHandler = async (recipeId) => {

      await recipeService.deleteRecipe(recipeId);
      
      setRecipes(state =>  state.filter(x => x._id !== recipeId))
      
      navigate('/catalog');
}

const onRecipeEditSubmit = async (values) => {
    const result = await recipeService.editRecipe (values._id, values);

    setRecipes(state => state.map(x => x._id === values._id ? result : x));

    navigate(`/catalog/${values._id}`);
}
  

  return (
  <AuthProvider>

    <div id='App'>
      
      <Header />
      
      <div id='main-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/logout' element={<Logout />} />
            <Route path='/create' element={<CreateRecipe onCreateRecipeSubmit={onCreateRecipeSubmit} />}/>
            <Route path='/catalog' element={<Catalog recipes={recipes} /> } />
            <Route path='/catalog/:recipeId' element={<RecipeDetails onDeleteHandler={onDeleteHandler} /> } />
            <Route path='/catalog/:recipeId/edit' element={<EditRecipe onRecipeEditSubmit={onRecipeEditSubmit} /> } />
          
          </Routes>

      </div>

    </div>

  </AuthProvider>
  );
}

export default App;
