import React from "react";
import './SettingsPage.css';
import Collapser from "./Collapser";
import ChangePassword from "./ChangePassword.component";


const SettingsPage = ({ userData, userDataSetter }) => {
    const props = { userData, userDataSetter }
    return (
        <div className="settings-page">
            <h1 className="settings-page-title">הגדרות</h1>
            <Collapser title={'שנה סיסמה'}>
                <ChangePassword {...props} />
            </Collapser>
            <Collapser title={'מחק משתמש'}>
                {'אתה בטוח? טוב, כאן בקרוב תוכל למחוק את המשתמש שלך'}
            </Collapser>
        </div>)
}

export default SettingsPage;
