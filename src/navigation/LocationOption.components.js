import React from 'react';
import { Dropdown } from 'react-bootstrap';



const LocationOption = (params) => {
    const chooseLocation = (result) => {
        console.log(result.location_name)
    }

    const result = params['optData']
    const index = params['optIndex']
    const text = result.location_name + ', ' + result.country_name
    return (
        <Dropdown.Item
            onClick={() => { chooseLocation(result) }}
            key={index}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
            <span>{text}</span>
            <img
                src={require(`./../assets/flags/${result['country_flag']}`)}
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