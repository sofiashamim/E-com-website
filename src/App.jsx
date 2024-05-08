import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Trial from './pages/Trial';
import AuthContext from './context/AuthContext';
import { useContext } from 'react';
import Singlepage from './pages/Singlepage';


function App() {

  let ctx=useContext(AuthContext)
  console.log(ctx.AuthValue)
  return (
    <div className="App">
      {/* <Trial/> */}
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
      {ctx.AuthValue && <Route path='/' element={<Home/>}/>}
      {  !ctx.AuthValue &&  <Route path='/' element={<Navigate to={'/login'}/>}/>}
     
      <Route path='/cart' element={<Cart/>}/>
      
      {!ctx.AuthValue && <Route path='/login' element={<Login/>}/>}
      {ctx.AuthValue  && <Route path='/login'  element={<Navigate to={'/'}/>}/>}

      <Route path='/signup' element={<Signup/>}/>
      <Route path='/singlepage' element={<Singlepage />}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
