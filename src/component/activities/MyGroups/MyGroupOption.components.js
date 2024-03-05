import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import GroupOption from '../GroupOption.component';
import { UserDataContext } from '../../../App';



const MyGroupOption = ({ item }) => {
    const { userData } = useContext(UserDataContext);
    const isAdmin = item['creationData']['adminId'] === userData['user_id'];
    return (
        <GroupOption
            item={item}
            style={isAdmin ? { backgroundColor: 'gold', borderWidth: '5px' } : {}}
            isMember={true}
        />
    )
};

export default MyGroupOption;
