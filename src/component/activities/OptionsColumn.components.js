import React, { useEffect, useState } from 'react';

const OptionsColumn = ({ locationId, userId, uri, optionComponent: OptionComponent, noResultsTxt }) => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorTxt, setErrorTxt] = useState(null);

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
                    const activitiesData = data['results'];
                    setActivities(activitiesData);
                } else {
                    setActivities([]);
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
                setActivities([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [locationId]); // empty dependency array to ensure the effect runs only once on mount

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : activities.length ? (
                activities.map((item, index) => <OptionComponent item={item} key={index} />)
            ) : (
                <div>{errorTxt}</div>
            )}
        </div>
    );
};

export default OptionsColumn;
