import { useState } from "react";
import { renameObjectProperties, searchInnerPath } from "../../logic/utils";
import { INPUT_TYPE_TO_RENAMING_FUNCS, POSTS_PARAMS } from "../../config/postParamsDataConf";

const DetailEdition = ({ path, ...editionProps }) => {
    const InputType = POSTS_PARAMS[path]['inputType'];
    const renamingDict = INPUT_TYPE_TO_RENAMING_FUNCS[InputType]
    renameObjectProperties(editionProps, renamingDict)
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

    const handleFinishEditing = () => {
        setIsEditing(false);
    };

    const handleStartEditing = (e) => {
        setEditedValue(e.target.value);
    };
    const editionProps = { value: editedValue, onChange: handleStartEditing, onBlur: handleFinishEditing }
    return (
        <div onDoubleClick={handleDoubleClick} onBlur={handleFinishEditing}>
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