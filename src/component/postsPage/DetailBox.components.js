import { useState } from "react";
import { POSTS_PARAMS } from "../../config/postParamsDataConf";
import { searchInnerPath } from "../../logic/utils";


const EditableParam = ({ value, path }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };
    const postParamData = POSTS_PARAMS[path]
    const InputType = postParamData['inputType'];
    const ValueDisplay = postParamData['valueDisplay'];
    return (
        <div onDoubleClick={handleDoubleClick}>
            <span onDoubleClick={handleDoubleClick}><ValueDisplay value={editedValue} /></span>
            {isEditing && (
                <InputType {...{ editedValue, setEditedValue, setIsEditing }} />
            )}
        </div>
    );

}

const DetailBox = ({ title, isAdminVersion, item, path }) => {
    const value = searchInnerPath(item, path)
    if (value === undefined) {
        return <div />
    }
    return (
        <div className="box-in-post">
            <p>{title + ' - '}</p>
            {isAdminVersion ? (
                <EditableParam value={value} path={path} />
            ) : (
                <div>value</div>
            )}
        </div>
    );
};

export default DetailBox