import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = (params) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:4000/users/log_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: username,
                    password: password,
                }),
            });

            if (response.status === 200) {
                const data = await response.json();
                params['userDataSetter'](data['userData'])
                navigate('/');
            }
            else if (response.status === 401) {
                setErrorMessage('Unauthorized - Wrong Password');
                setPassword('')
            }
            else if (response.status === 404) {
                setErrorMessage('User is not exists');
                setUsername('');
                setPassword('')
            }
            else { setErrorMessage('Unexpected error occurred'); }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className='login-form'>
            <h2>Login Form</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control email"
                        placeholder="Enter email"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control password"
                        placeholder="Enter password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <Link to="/sign-up" className="forgot-password text-right" >
                    Forgot password?
                </Link>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default LoginForm;
