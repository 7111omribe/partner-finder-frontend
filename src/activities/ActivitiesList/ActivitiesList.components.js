import React, { useState, useEffect } from 'react';
import ActivityOption from './ActivityOption.components';

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/activities/get_activities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: 1,
            locationId: 1,
          }),
        });

        if (response.status === 200) {
          const data = await response.json();
          const activitiesData = data['results'];
          setActivities(activitiesData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // empty dependency array to ensure the effect runs only once on mount

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : activities.length ? (
        activities.map((item, index) => (
          <ActivityOption
            title={item.activity_name}
            imgPath={item.img_path}
            description={item.activity_description}
            activityTime={item.activity_time}
            activityType={item.activity_type}
            key={index}
          />
        ))
      ) : (
        <div>No activities available</div>
      )}
    </div>
  );
};

export default ActivitiesList;
