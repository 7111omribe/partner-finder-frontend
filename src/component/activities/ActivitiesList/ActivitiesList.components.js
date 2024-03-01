import OptionsColumn from "../OptionsColumn.components";
import ActivityOption from "./ActivityOption.components";

const ActivitiesList = () => {
  return (<OptionsColumn
    uri="activities/get_activities"
    optionComponent={ActivityOption}
    noResultsTxt={'אין כאן רעיונות לאטרקציות עדיין... אנחנו על זה'}
  />
  );
};

export default ActivitiesList;
