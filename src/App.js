import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as recipeService from './services/recipeService';

import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';

function App() {
  const navigate = useNavigate();
  
  const [recipes, setRecipes] = useState([]);

  const onCreateRecipeSubmit = async (recipeData) => {
      const newRecipe = await recipeService.createRecipe(recipeData);

      console.log(newRecipe)
  } 

  return (
    <div className='App'>
      
      <Header />
      
      <div id='main-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/create' element={<CreateRecipe onCreateRecipeSubmit={onCreateRecipeSubmit} />}/>
          
          </Routes>

      </div>



    </div>
  );
}

export default App;
