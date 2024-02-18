import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { UserDataContext } from '../../App';



const LocationOption = (params) => {
    const { userData } = useContext(UserDataContext);
    const chooseLocation = async (chosenOptionData, locationSetter, userId, searchQuerySetter) => {
        locationSetter(chosenOptionData);
        const response = await fetch('http://localhost:4000/navbar/change_location', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                locationId: chosenOptionData['location_id'],
                userId: userId,
            }),
        })
        console.log(response) // I dont know, add log or something
        searchQuerySetter('');

    }

    const optData = params['optData']
    const index = params['optIndex']
    const locationSetter = params['locationSetter']
    const userId = userData['user_id']
    const searchQuerySetter = params['searchQuerySetter']
    const text = optData.location_name + ', ' + optData.country_name
    return (
        <Dropdown.Item
            onClick={() => { chooseLocation(optData, locationSetter, userId, searchQuerySetter) }}
            key={index}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
            <span>{text}</span>
            <img
                src={require(`./../../assets/flags/${optData['country_flag']}`)}
                width="28"
                height="14px"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                style={{
                    marginTop: '0.0em',
                    marginRight: '8px'
                }}
            />

        </Dropdown.Item>
    )

};
export default LocationOption;