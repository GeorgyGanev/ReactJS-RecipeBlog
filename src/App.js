import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';

function App() {
  return (
    <div className='App'>
      
      <Header />
      
      <div id='main-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/create' element={<CreateRecipe />}/>
          
          </Routes>

      </div>



    </div>
  );
}

export default App;
