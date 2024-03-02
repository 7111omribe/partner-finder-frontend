import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../../App';

const OptionsColumn = ({
    uri,
    optionComponent: OptionComponent,
    afterwardsComponent: AfterwardsComponent,
    noResultsTxt,
    setDataFunc
}) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorTxt, setErrorTxt] = useState(null);
    const { userData, locationData } = useContext(UserDataContext);
    const userId = userData['user_id']
    const locationId = locationData['location_id']
    function setOptionsEverywherw(val){
        setOptions(val);
        if(setDataFunc){
            setDataFunc(val)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/' + uri, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userId,
                        locationId: locationId,
                    }),
                });

                if (response.status === 200) {
                    const data = await response.json();
                    const optionsData = data['results'];
                    setOptionsEverywherw(optionsData);
                } else {
                    setOptionsEverywherw([]);
                    setErrorTxt(
                        response.status === 204
                            ? noResultsTxt
                            : 'תקלה לא ידועה'
                    );
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                setErrorTxt('תקלה לא ידועה');
                console.error('Error fetching data:', error);
                setOptionsEverywherw([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [locationId]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : options.length ? (
                options.map((item, index) => <OptionComponent item={item} key={index} />)
            ) : (
                <div>{errorTxt}</div>
            )}
            {AfterwardsComponent && <div style={{marginTop:20}}><AfterwardsComponent /></div>}
        </div>
    );
};

export default OptionsColumn;
