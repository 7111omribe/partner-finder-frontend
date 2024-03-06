import { useState } from "react";
import { POSTS_PARAMS } from "../../config/postParamsDataConf";
import { searchInnerPath } from "../../logic/utils";


const EditableParam = ({ value, path, isActivateEdition }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };
    const finishEditing = async () => {
        try {
            const response = await fetch('http://localhost:4000/posts/editPostData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    postId: '65e6287792e4485d15705a81', // todo CHANGE!
                    path: path,
                    newValue: editedValue,
                }),
            });

            if (response.status === 201) {
                console.log('successfully finished edition')
                setIsEditing(false);
            }
            else {
                console.log('error during editing')
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    const postParamData = POSTS_PARAMS[path]
    const InputType = postParamData['inputType'];
    const ValueDisplay = postParamData['valueDisplay'];
    return (
        <div>
            <span onDoubleClick={handleDoubleClick}><ValueDisplay value={editedValue} /></span>
            {isActivateEdition &&
                (isEditing && (
                    <InputType {...{ editedValue, setEditedValue, finishEditing }} />
                ))}
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
            <EditableParam value={value} path={path} isActivateEdition={isAdminVersion} />
        </div>
    );
};

export default DetailBox