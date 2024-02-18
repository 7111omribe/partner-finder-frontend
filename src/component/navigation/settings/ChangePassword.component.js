import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import './SettingForm.css';
import { UserDataContext } from '../../../App';


const ChangePassword = ({ userData }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { setUserData } = useContext(UserDataContext);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data) => {
        if (data.currentPassword != userData['password']) {
            setErrorMessage('סיסמה שגוייה')
        }
        else if (data.newPassword !== data.confirmNewPassword) {
            setErrorMessage('לא שמת אותה סיסמה... תבדוק שוב')
        }
        else if (data.newPassword.length < 7) {
            setErrorMessage('הסיסמה צריכה להיות לפחות שבעה תווים'); // todo create one password validation func
        }
        else {
            try {
                const response = await fetch('http://localhost:4000/users/change_password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userData.user_id,
                        newPassword: data.newPassword
                    }),
                });

                if (response.status === 201) {
                    setErrorMessage('הסיסמה שונתה בהצלחה!') //todo change color
                    userData['password'] = data.newPassword
                    setUserData(userData)
                }
                else { setErrorMessage('קרתה תקלה, שווה לנסות שוב עוד דקה'); }
            } catch (error) {
                console.error('Error during login:', error);
                setErrorMessage('קרתה תקלה, שווה לנסות שוב עוד דקה');
            }
        }
    };

    return (
        <div className="settings-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="currentPassword">סיסמה</label>
                    <input
                        type="password"
                        id="currentPassword"
                        {...register('currentPassword', { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="newPassword">סיסמה חדשה</label>
                    <input
                        type="password"
                        id="newPassword"
                        {...register('newPassword', { required: true })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmNewPassword">סיסמה חדשה שוב</label>
                    <input
                        type="password"
                        id="confirmNewPassword"
                        {...register('confirmNewPassword', { required: true })}
                    />
                </div>

                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}

                <button type="submit">שנה סיסמה</button>
            </form>
        </div>
    );
};

export default ChangePassword;
