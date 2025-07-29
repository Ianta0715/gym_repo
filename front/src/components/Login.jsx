import { useEffect, useState } from 'react';
import logo from '../assets/logoBoxFit.png';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/reducer';
import Swal from 'sweetalert2';

export const Login = () => {
  const initialState = { 
    email: '',
    password: '',
  };

  

  const [user, setUserState] = useState(initialState);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    const isValid = user.email && user.password;
    setIsFormValid(isValid);
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user.email || !user.password) {
      setError('You must complete all the inputs');
      return;
    }
   
    try {
      const response = await axios.post(' https://gym-repo-42a3.onrender.com/users/login', user);

      
      const userData = response.data.actualUser.userId;
        
      
      

      dispatch(setUser(userData));
      Swal.fire({
        title: "User Login",
        text: "welcome!",
        icon: "success"
      });
      setUserState(initialState);
      setSuccess('Login Successful');
      setError(null);
      navigate('/home');
    } catch (error) {
      setError(error.response?.data?.message || 'Login Failed');
      setSuccess(null);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-40 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Your email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                isFormValid ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Sign in
            </button>
          </div>
        </form>
        {error && <p className="mt-2 text-center text-sm text-red-500">{error}</p>}
        {success && <p className="mt-2 text-center text-sm text-green-500">{success}</p>}
      </div>
    </div>
  );
};
