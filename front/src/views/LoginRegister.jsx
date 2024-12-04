
import { Register } from '../components/Register'
import { Login } from '../components/Login'
import './LoginRegister.css';

export const LoginRegister = () => {
  return (
    <div className="flex-container">
      <div className="form-container">
        <Register />
      </div>
      <div className="form-container">
        <Login />
      </div>
    </div>
  );
};
