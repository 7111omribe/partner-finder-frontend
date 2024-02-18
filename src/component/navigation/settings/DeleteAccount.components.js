import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmationModal from '../../../toolsComponents/ConfirmationModal.components';

import './SettingForm.css';
import { UserDataContext } from '../../../App';

const DeleteAccount = ({ userData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const { setUserData } = useContext(UserDataContext);

    const onSubmit = async (data) => {
        if (data.currentPassword === userData['password']) {
            setShowConfirmationModal(true);
        } else {
            setErrorMessage('סיסמה שגוייה');
        }
    };

    const handleConfirmDelete = async () => {
        try {
            const response = await fetch('http://localhost:4000/users/delete_account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userData.user_id
                }),
            });

            if (response.status === 201) {
                setUserData({})
            }
            else { setErrorMessage('קרתה תקלה, שווה לנסות שוב עוד דקה'); }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('קרתה תקלה, שווה לנסות שוב עוד דקה');
        } finally {
            setShowConfirmationModal(false);
        }
    };

    const handleCancelDelete = () => {
        setShowConfirmationModal(false);
        setErrorMessage('');
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
                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}

                <button type="submit">מחק משתמש</button>
            </form>

            {showConfirmationModal && (
                <ConfirmationModal
                    onCancel={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                    title={'האם אתה בטוח שברצונך למחוק את החשבון? פעולה זו היא בלתי הפיכה!'}
                    confirmTitle={'מחק'}
                    cancelTitle={'בטל'}
                />
            )}
        </div>
    );
};

export default DeleteAccount;
