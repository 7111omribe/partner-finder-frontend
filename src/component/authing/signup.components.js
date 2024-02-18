import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../App';

const SignUp = (params) => {
    const [errorMessage, setErrorMessage] = useState('');
    const { setUserData } = useContext(UserDataContext);
    const navigate = useNavigate();
    const validatePassword = (e) => {
        const password = e.target.password.value;
        if (password.length < 7) {
            setErrorMessage('סיסמה לא יכולה להיות קצרה יותר מ7 תווים');
            e.target.password.value = '';
            e.target.repeatedPassword.value = '';
            return false;
        }
        const repeatedPassword = e.target.repeatPassword.value
        if (password !== repeatedPassword) {
            setErrorMessage('בטוח שהקלדת את אותה הסיסמה פעמיים?');
            e.target.password.value = '';
            e.target.repeatedPassword.value = '';
            return false;
        }
        return true;
    }

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
                setUserData(data['userData'])
                navigate('/activities');
            }
            else if (response.status === 409) {
                setErrorMessage('המשתמש כבר קיים... יכול להיות שכבר נרשמת?');
                e.target.email.value = '';
            }
            else { setErrorMessage('Unexpected error occurred'); }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('קרתה תקלה, שווה לנסות שוב עוד דקה');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(e)) {
            return
        }
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
            <h3>הרשמה</h3>
            <div className="mb-3">
                <label>שם מלא</label>
                <input
                    name='fullName'
                    type="text"
                    className="form-control"
                    placeholder="שם מלא"
                    required
                />
            </div>
            <div className="mb-3">
                <label>כתובת אימייל</label>
                <input
                    name='email'
                    type="email"
                    className="form-control"
                    placeholder="הכנס מייל"
                    required
                />
            </div>
            <div className="mb-3">
                <label>סיסמה</label>
                <input
                    name='password'
                    type="password"
                    className="form-control"
                    placeholder="הכנס סיסמה"
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    name='repeatPassword'
                    type="password"
                    className="form-control"
                    placeholder="הכנס סיסמה שוב"
                    required
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    הרשמה!
                </button>
            </div>
            <p className="forgot-password">
                כבר רשום? <Link to="/login" > כניסה לאתר </Link>
            </p>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
};

export default SignUp;
