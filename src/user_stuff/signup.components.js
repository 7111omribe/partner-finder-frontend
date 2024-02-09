import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = (params) => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSignUp = async (formResults, e) => {
        try {
            const response = await fetch('http://localhost:4000/users/sign_up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formResults),
            });

            if (response.status === 201) {
                const data = await response.json();
                params['userDataSetter'](data['userData'])
                navigate('/');
            }
            else if (response.status === 409) {
                setErrorMessage('User is already exists');
                e.target.email.value = '';
            }
            else { setErrorMessage('Unexpected error occurred'); }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userData = {
            name: fullName,
            email,
            password,
        };

        handleSignUp(userData, e);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
                <label>Full name</label>
                <input
                    name='fullName'
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    required
                />
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    name='email'
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    name='password'
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <Link to="/sign-in" className="forgot-password text-right">
                Already registered sign in?
            </Link>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
};

export default SignUp;
