import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import GroupOption from '../GroupOption.component';



const MyGroupOption = ({ item }) => {
    const isAdmin = item['creationData']['adminId'] === 1; // todo relize how to get read userIds
    return (
        <GroupOption
            item={item}
            style={isAdmin ? { backgroundColor: 'gold', borderWidth: '5px' } : {}}
        />
    )
};

export default MyGroupOption;
