import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthContext } from './contexts/AuthContext';

import { recipeServiceFactory }from './services/recipeService';
import { authServiceFactory } from './services/authService';
 
import { Header } from './components/Header/Header';

import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';
import { Catalog } from './components/Catalog/Catalog';
import { Logout } from './components/Logout/Logout';

function App() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState({});
  const recipeService = recipeServiceFactory(user.accessToken);
  const authService = authServiceFactory(user.accessToken);

  useEffect(() => {
    recipeService.getAll()
      .then(result => {
        setRecipes(result)
      })
  }, []);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setUser(result);
      navigate('/catalog')

    } catch (err) {
      console.log('login problem')
    }
  };

  const onRegisterSubmit = async (data) => {

    const { repeatPass, ...registerData } = data;

    if (repeatPass !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);

      setUser(result);
      navigate('/catalog')
    }catch(err) {
      console.log('register problem')
    }
  };

  const onCreateRecipeSubmit = async (recipeData) => {
      const newRecipe = await recipeService.createRecipe(recipeData);

      setRecipes(state => [...state, newRecipe]);

      navigate('/catalog');
  };
  
  const onLogout = async () => {
    await authService.logout();
    
    setUser({});

  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout
  };

 

  return (
  <AuthContext.Provider value={contextValues}>

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
          
          </Routes>

      </div>

    </div>

  </AuthContext.Provider>
  );
}

export default App;
