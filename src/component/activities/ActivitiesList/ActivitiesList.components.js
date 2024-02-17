import OptionsColumn from "../OptionsColumn.components";
import ActivityOption from "./ActivityOption.components";

const ActivitiesList = ({ locationId, userId }) => {
  return (<OptionsColumn
    locationId={locationId}
    userId={userId}
    uri="activities/get_activities"
    optionComponent={ActivityOption}
    noResultsTxt={'אין כאן רעיונות לאטרקציות עדיין... אנחנו על זה'}
  />
  );
};

export default ActivitiesList;
