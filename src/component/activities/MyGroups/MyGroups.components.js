import OptionsColumn from "../OptionsColumn.components";

const Junk = ({ locationId, userId }) => {
    return (<div>hey</div>)
}

const MyGroups = ({ locationId, userId }) => {
    return (<OptionsColumn
        locationId={locationId}
        userId={userId}
        uri="posts/getMyPosts"
        optionComponent={Junk}
        noResultsTxt={'לא הצטרפת לאף קבוצה עדיין!'}
    />
    );
};

export default MyGroups;
