import { useState } from "react";
import { searchInnerPath } from "../../logic/utils";
import { POSTS_PARAMS } from "../../config/postParamsDataConf";

const DetailEdition = ({ path, ...editionProps }) => {
    const InputType = POSTS_PARAMS[path]['inputType'];
    return (
        <InputType {...editionProps} />
    )
}

const EditableParam = ({ value, path }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditedValue(e.target.value);
    };
    const editionProps = { value: editedValue, onChange: handleChange, onBlur: handleBlur }
    return (
        <div onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
            <span onDoubleClick={handleDoubleClick}>{editedValue}</span>
            {isEditing && (
                <DetailEdition {...editionProps} path={path} />
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