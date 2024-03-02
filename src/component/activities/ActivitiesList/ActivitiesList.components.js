import { useContext } from "react";
import OptionsColumn from "../OptionsColumn.components";
import ActivityOption from "./ActivityOption.components";
import { ActivitiesListContext } from "../ActivitiesPage.components";

const ActivitiesList = () => {
  const { setActivitiesList } = useContext(ActivitiesListContext);
  return (<OptionsColumn
    uri="activities/get_activities"
    optionComponent={ActivityOption}
    noResultsTxt={'אין כאן רעיונות לאטרקציות עדיין... אנחנו על זה'}
    setDataFunc={setActivitiesList}
  />
  );
};

export default ActivitiesList;
