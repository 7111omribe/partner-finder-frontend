import { Image } from "react-bootstrap";
import OptionsColumn from "../OptionsColumn.components";
import MyGroupOption from "./MyGroupOption.components";


const Junk = ({ }) => {
    return (
        <Image src={require("./../../../assets/icons/blue_plus.png")} style={{maxWidth:'20%'}}/>
    );
};


const MyGroups = ({ locationId }) => {
    return (<OptionsColumn
        locationId={locationId}
        uri="posts/getMyPosts"
        optionComponent={MyGroupOption}
        afterwardsComponent={Junk}
        noResultsTxt={'לא הצטרפת לאף קבוצה עדיין!'}
    />
    );
};

export default MyGroups;
