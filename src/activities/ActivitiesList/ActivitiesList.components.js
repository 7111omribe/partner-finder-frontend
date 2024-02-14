import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ActivityOption from './ActivityOption.components';




const ActivitiesList = (params) => {
    return (
        <ActivityOption
            title={'סיור אוכל בעמק הקדוש עם ליאת'}
            imgPath={'liat.jpg'}
            description={'סיור של אוכל, נפש ותרבות עם ליאת - ישראלית שהשתקעה באזור ותיקח אתכם למסע שיחבר אתכם לתרבות הנסתרת של העמק הקדוש דרך מפגש אוטנטי עם האנשים והמאכלים של האזור'}
            activityTime={'יום'}
            activityType={'סיור'}
        />
    )
};

export default ActivitiesList;
