import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as recipeService from './services/recipeService';

import { Header } from './components/Header/Header';

import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';
import { Catalog } from './components/Catalog/Catalog';

function App() {
  const navigate = useNavigate();
  
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll()
      .then(result => setRecipes(result));
  }, []);


  const onCreateRecipeSubmit = async (recipeData) => {
      const newRecipe = await recipeService.createRecipe(recipeData);

      setRecipes(state => [...state, newRecipe]);
      navigate('/catalog');
  } 

  return (
    <div id='App'>
      
      <Header />
      
      <div id='main-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/create' element={<CreateRecipe onCreateRecipeSubmit={onCreateRecipeSubmit} />}/>
            <Route path='/catalog' element={<Catalog recipes={recipes} /> } />
          
          </Routes>

      </div>



    </div>
  );
}

export default App;
