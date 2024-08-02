
import './App.css'
import './styles/tailwind.css';
import 'normalize.css';
import Home from './views/Home'
import MyAppointments from './views/MyAppointments'
import { Navbar } from './components/Navbar';
import { Register } from './views/Register';
import { Login } from './views/Login';

function App() {
 

  return (
    <>
      <Navbar />
      <Home/>
     {/* <MyAppointments />*/}
      <Register />
      <Login />
    </>
  )
}

export default App
