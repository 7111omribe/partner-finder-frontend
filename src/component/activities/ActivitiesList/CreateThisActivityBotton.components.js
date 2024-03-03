import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import CreateGroupPage from "../MyGroups/CreateGroupPage.components";


const CreateThisActivityBotton = ({ activityTitle, activityId }) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const onClick = async (data) => {
        setShowConfirmationModal(true)
    }
    const onExit = async (data) => {
        setShowConfirmationModal(false)
    }

    const activityOption = { label: activityTitle, value: activityId }

    return (
        <div>
            <BsPlus onClick={onClick} size={30} className="ml-auto " />
            {showConfirmationModal && <CreateGroupPage onCancel={onExit} activity={activityOption} ></CreateGroupPage>}
        </div>
    );
};


export default CreateThisActivityBotton