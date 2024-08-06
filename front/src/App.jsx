
import './App.css'
import './styles/tailwind.css';
import 'normalize.css';
import Home from './views/Home'
import MyAppointments from './views/MyAppointments'
import { Navbar } from './components/Navbar';
import { Register } from './views/Register';
import { Login } from './views/Login';
import {Route, Routes, useLocation} from 'react-router-dom';
import { Activities } from './views/Activities';
import { AboutUs } from './views/AboutUs';

function App() {
  const location = useLocation();
 

  return (
    <>
      {location === '/' ? null : <Navbar />}
    
    <Routes>
      <Route path='/home' element={<Home/>}/>
        
      <Route path='/appointments' element={ <MyAppointments /> }/>
      
      <Route path='/register' element={ <Register /> }/>
      
      <Route path='/login' element={<Login /> }/>
      
      <Route path='/aboutUs' element={<AboutUs /> }/>
      
      <Route path='/activities' element={<Activities /> }/>
           
      </Routes>
    </>
  )
}

export default App
