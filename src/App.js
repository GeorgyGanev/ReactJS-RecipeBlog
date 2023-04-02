import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { RecipeProvider } from './contexts/RecipeContex';

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
  
  return (
  <AuthProvider>
    <RecipeProvider>

      <div id='App'>
        <Header />
        
        <div id='main-content'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/logout' element={<Logout />} />
              <Route path='/create' element={<CreateRecipe />}/>
              <Route path='/catalog' element={<Catalog /> } />
              <Route path='/catalog/:recipeId' element={<RecipeDetails /> } />
              <Route path='/catalog/:recipeId/edit' element={<EditRecipe /> } />
            
            </Routes>

        </div>
      </div>

    </RecipeProvider>
  </AuthProvider>
  );
}

export default App;
