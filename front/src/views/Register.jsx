import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        const isValid = formData.email && formData.password && formData.username && formData.firstName && formData.lastName && formData.confirmPassword;
        setIsFormValid(isValid);
    }, [formData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validación
        if (!formData.username || !formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('You must complete all the inputs');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Password and Confirm password must be equal');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/users/register', {
                name: formData.firstName + ' ' + formData.lastName, 
                email: formData.email,
                birthday: new Date().toISOString().split('T')[0], 
                username: formData.username,
                password: formData.password
            });

            setSuccess('Register Succesfull');
            setError(null);
        } catch (error) {
            setError(error.response?.data?.message || 'Register Fail');
            setSuccess(null);
        }
    };

    return (
        <form className='m-4' onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="IanTarquini_150"
                                        autoComplete="username"
                                        className="block flex-1 border border-gray-300 bg-transparent py-1 px-2 text-gray-900 placeholder:text-gray-400 text-xs sm:text-xs focus:ring-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <div className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-8">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    className="block flex-1 border border-gray-300 bg-transparent py-1.5 px-3 text-sm placeholder:text-gray-400 focus:ring-0"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 mr-4">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    autoComplete="family-name"
                                    className="block flex-1 border border-gray-300 bg-transparent py-1.5 px-3 text-sm placeholder:text-gray-400 focus:ring-0"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 mr-4">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                    className="block flex-1 border border-gray-300 bg-transparent py-1.5 px-3 text-sm placeholder:text-gray-400 focus:ring-0"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 mr-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                    className="block flex-1 border border-gray-300 bg-transparent py-1.5 px-3 text-sm placeholder:text-gray-400 focus:ring-0"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block flex-1 border border-gray-300 bg-transparent py-1.5 px-14 text-sm placeholder:text-gray-400 focus:ring-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`rounded-md mr-3 px-3 py-2 text-sm font-semibold text-white shadow-sm ${
                        isFormValid ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                    Save
                </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
        </form>
    );
}
