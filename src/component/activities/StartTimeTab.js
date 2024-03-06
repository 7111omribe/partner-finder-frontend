import React from 'react';

export const StartTimeTab = ({ startTimeStr }) => {
    if (!startTimeStr) {
        return <div>{'לא נקבע תאריך'}</div>
    }
    const now = new Date();
    const actionDate = new Date(startTimeStr);

    const hoursDiff = (actionDate - now) / 60000 / 60;
    let dateColor;
    if (hoursDiff > 2) { // todo conf 2 as 2 hours before activity
        dateColor = 'green';
    } else if (hoursDiff > -1) { // todo conf this too
        dateColor = 'yellow';
    } else {
        dateColor = 'red';
    }
    const hourTxt = actionDate.toTimeString().slice(0, 5)
    const daysDiff = (actionDate.setHours(0, 0, 0, 0) - now.setHours(0, 0, 0, 0)) / 60000 / 60 / 24;
    let txt;
    if (daysDiff === 1) {
        txt = `מחר ב${hourTxt}`;
    } else if (daysDiff === 2) {
        txt = `מחרתיים ב${hourTxt}`;
    } else if (daysDiff > 2) {
        txt = `עוד ${daysDiff} ימים ב${hourTxt}`;
    } else if (daysDiff == 0) {
        txt = `In ${daysDiff} days`;
    } else {
        txt = `לפני ${-daysDiff} ימים`;
    }
    return (
        <div style={{ color: dateColor }}>
            {txt}
        </div>
    );
};
