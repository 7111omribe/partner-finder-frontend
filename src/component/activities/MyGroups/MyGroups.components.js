import OptionsColumn from "../OptionsColumn.components";
import MyGroupOption from "./MyGroupOption.components";


const MyGroups = ({ locationId, userId }) => {
    return (<OptionsColumn
        locationId={locationId}
        userId={userId}
        uri="posts/getMyPosts"
        optionComponent={MyGroupOption}
        noResultsTxt={'לא הצטרפת לאף קבוצה עדיין!'}
    />
    );
};

export default MyGroups;
