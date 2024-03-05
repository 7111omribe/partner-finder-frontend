import { useState } from "react";


const DetailBox = ({ title, value, isAdminVersion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const handleDoubleClick = () => {
        if (isAdminVersion) {
            setIsEditing(true);
        }
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditedValue(e.target.value);
    };

    if (value === undefined) {
        return <div />
    }
    return (
        <div className="box-in-post" onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
            <p>{title + ' - '}</p>
            <span onDoubleClick={handleDoubleClick}>{editedValue}</span>
            {isEditing && (
                <input
                    type="text"
                    value={editedValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            )}
        </div>
    );
};

export default DetailBox