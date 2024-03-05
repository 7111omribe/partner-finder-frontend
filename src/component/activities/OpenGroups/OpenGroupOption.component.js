import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import GroupOption from '../GroupOption.component';



const OpenGroupOption = ({ item }) => {
    return (
        <GroupOption
            item={item}
            isMember={false}
        />
    )
};

export default OpenGroupOption;
