import React, { useState, useEffect } from 'react';
import ActivityOption from './ActivityOption.components';

const ActivitiesList = ({ locationId, userId }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noResultsTxt, setNoResultsTxt] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/activities/get_activities', {
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
          setNoResultsTxt(response.status === 204 ? 'אין כאן רעיונות לאטרקציות עדיין... אנחנו על זה' : 'תקלה לא ידועה');
          console.error('Failed to fetch data');
        }
      } catch (error) {
        setNoResultsTxt('תקלה לא ידועה')
        console.error('Error fetching data:', error);
        setActivities([])
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
        activities.map((item, index) => (
          <ActivityOption
            item={item}
            key={index}
          />
        ))
      ) : (
        <div>{noResultsTxt}</div>
      )}
    </div>
  );
};

export default ActivitiesList;
