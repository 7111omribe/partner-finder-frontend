import React from 'react';

export const StartTimeTab = ({ item }) => {
    const startTimeStr = item['postData']['plannedDate'] ?? null;
    if (startTimeStr===null){
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

    const daysDiff = (actionDate.setHours(0, 0, 0, 0) - now.setHours(0, 0, 0, 0)) / 60000 / 60 / 24;
    let txt;
    if (daysDiff === 1) {
        txt = `מחר ב${actionDate.toTimeString().slice(0, 5)}`;
    } else if (daysDiff === 2) {
        txt = `מחרתיים ב${actionDate.toTimeString().slice(0, 5)}`;
    } else if (daysDiff > 2) {
        txt = `עוד ${daysDiff} ימים ב${actionDate.toTimeString().slice(0, 5)}`;
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
