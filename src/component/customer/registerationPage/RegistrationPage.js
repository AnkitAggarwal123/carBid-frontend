import React, { useState } from 'react';

const RegistrationPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', form);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-teal-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-teal-700">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="name" className="block text-sm font-medium text-teal-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-teal-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="block text-sm font-medium text-teal-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-sm font-medium text-teal-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-teal-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage; 