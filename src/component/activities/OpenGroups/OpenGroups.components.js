import OptionsColumn from "../OptionsColumn.components";
import OpenGroupOption from "./OpenGroupOption.component";

const OpenGroups = ({ locationId }) => {
    return (<OptionsColumn
        locationId={locationId}
        uri="posts/getOthersPosts"
        optionComponent={OpenGroupOption}
        noResultsTxt={'אין כרגע קבוצות פתוחות... צור אחת בעצמך!'}
    />
    );
};

export default OpenGroups;
