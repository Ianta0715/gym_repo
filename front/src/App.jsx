
import './App.css'
import './styles/tailwind.css';
import 'normalize.css';
import Home from './views/Home'
import MyAppointments from './views/MyAppointments'
import { Navbar } from './components/Navbar';

function App() {
 

  return (
    <>
      <Navbar />
      <Home/>
      <MyAppointments />
    </>
  )
}

export default App
