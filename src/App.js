import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div className='App'>
      
      <Header />
      
      <div id='main-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          
          </Routes>

      </div>

      <Footer />

    </div>
  );
}

export default App;
