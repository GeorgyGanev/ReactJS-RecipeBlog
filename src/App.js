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
import { RouteGuard } from './components/common/RouteGuard';
import { RecipeOwner } from './components/common/RecipeOwner';
import { SearchContextProvider } from './contexts/SearchContext';
import { UserProfile } from './components/UserProfile/UserProfile';

function App() {
  
  return (
  <AuthProvider>
    <RecipeProvider>
      <SearchContextProvider>

      <div id='App'>
        <Header />
        
        <div id='main-content'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/> 
              <Route path='/create' element={
                <RouteGuard>
                  <CreateRecipe />
                </RouteGuard>
              }/>
              <Route path='/userProfile' element={
                <RouteGuard>
                  <UserProfile />
                </RouteGuard>
              }/>
              <Route path='/logout' element={
                <RouteGuard>
                  <Logout />
                </RouteGuard>
              } />
              <Route path='/catalog/:recipeId/edit' element={
                <RecipeOwner>
                  <EditRecipe /> 
                </RecipeOwner>
                } />
              <Route path='/catalog' element={<Catalog /> } />
              <Route path='/catalog/:recipeId' element={<RecipeDetails /> } />
            
            </Routes>

        </div>
      </div>
    
      </SearchContextProvider>
    </RecipeProvider>
  </AuthProvider>
  );
}

export default App;
