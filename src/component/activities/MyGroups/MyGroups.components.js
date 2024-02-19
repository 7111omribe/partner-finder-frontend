import { Image } from "react-bootstrap";
import OptionsColumn from "../OptionsColumn.components";
import MyGroupOption from "./MyGroupOption.components";
import { useState } from "react";
import CreateGroupPage from "./CreateGroupPage.components";


const CreateGroupBotton = ({ }) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const onClick = async (data) => {
        setShowConfirmationModal(true)
    }
    const onExit = async (data) => {
        setShowConfirmationModal(false)
    }
    return (
        <div>
            <Image src={require("./../../../assets/icons/blue_plus.png")} style={{ maxWidth: '20%' }} onClick={onClick} />
            {showConfirmationModal && <CreateGroupPage onCancel={onExit}></CreateGroupPage>}
        </div>
    );
};


const MyGroups = ({ locationId }) => {
    return (<OptionsColumn
        locationId={locationId}
        uri="posts/getMyPosts"
        optionComponent={MyGroupOption}
        afterwardsComponent={CreateGroupBotton}
        noResultsTxt={'לא הצטרפת לאף קבוצה עדיין!'}
    />
    );
};

export default MyGroups;
