import React from 'react';
import './ConfirmationModal.css'

const ConfirmationModal = ({ onCancel, onConfirm, title, confirmTitle, cancelTitle }) => {
  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal">
        <p>{title}</p>
        <button onClick={onCancel}>{cancelTitle}</button>
        <button onClick={onConfirm}>{confirmTitle}</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
