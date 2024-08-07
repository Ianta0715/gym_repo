
import './App.css'
import './styles/tailwind.css';
import 'normalize.css';
import Home from './views/Home'
import MyAppointments from './views/MyAppointments'
import { Navbar } from './components/Navbar';
import { Register } from './components/Register';
import { Login } from './components/Login';
import {Route, Routes, useLocation} from 'react-router-dom';
import { Activities } from './views/Activities';
import { AboutUs } from './views/AboutUs';
import { LoginRegister } from './views/LoginRegister';

function App() {
  const location = useLocation();
 

  return (
    <>
      {location === '/' ? null : <Navbar />}
    
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
        
      <Route path='/appointments' element={ <MyAppointments /> }/>
      
      <Route path='/register' element={ <Register /> }/>
      
      <Route path='/login' element={<Login /> }/>
      
      <Route path='/aboutUs' element={<AboutUs /> }/>
      
      <Route path='/activities' element={<Activities /> }/>
      
      <Route path='/register-login' element={<LoginRegister /> }/>

           
      </Routes>
    </>
  )
}

export default App
