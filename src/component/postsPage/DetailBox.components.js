import { useState } from "react";
import { renameObjectProperties, searchInnerPath } from "../../logic/utils";
import { INPUT_TYPE_TO_RENAMING_FUNCS, POSTS_PARAMS } from "../../config/postParamsDataConf";

const DetailEdition = ({ editedValue, setEditedValue, setIsEditing, path }) => {
    const InputType = POSTS_PARAMS[path]['inputType'];
    return (
        <InputType {...{ editedValue, setEditedValue, setIsEditing}} />
    ) // todo move to upper func
}

const EditableParam = ({ value, path }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    return (
        <div onDoubleClick={handleDoubleClick}>
            <span onDoubleClick={handleDoubleClick}>{editedValue}</span>
            {isEditing && (
                <DetailEdition editedValue={editedValue} setEditedValue={setEditedValue} setIsEditing={setIsEditing} path={path} />
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