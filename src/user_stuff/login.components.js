import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from '../form_tools/checkbox.components';


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
                setErrorMessage('סיסמה לא נכונה');
                setPassword('')
            }
            else if (response.status === 404) {
                setErrorMessage('בטוח שנרשמת? המשתמש הזה לא קיים');
                setUsername('');
                setPassword('')
            }
            else { setErrorMessage('תקלה לא ידועה:('); }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('תקלה לא ידועה, תנסה להיכנס שוב אולי זה יעבוד הפעם');
        }
    };

    return (
        <div className='login-form'>
            <h2>היכנסו עכשיו</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="mb-3">
                    <label>כתובת אימייל</label>
                    <input
                        type="email"
                        className="form-control email"
                        placeholder="הכנס אימייל"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>סיסמה</label>
                    <input
                        type="password"
                        className="form-control password"
                        placeholder="הכנס סיסמה"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Checkbox text="זכור אותי"></Checkbox>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        כניסה
                    </button>
                </div>
                <p className="forgot-password">
                    אין לך משתמש עדיין? <Link to="/sign-up" > הרשמה </Link>
                </p>

            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default LoginForm;
