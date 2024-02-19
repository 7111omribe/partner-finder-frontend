import React from 'react';
import SemiPage from '../../../toolsComponents/SemiPage.components';




const CreateGroupPage = ({ onCancel, children }) => {
    return (
        <SemiPage onCancel={onCancel}>
            <div>
                are you sure about that?
            </div>
        </SemiPage>
    );
};


export default CreateGroupPage;
