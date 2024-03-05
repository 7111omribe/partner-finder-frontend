import { useState } from "react";
import { Controller } from "react-hook-form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TextInput = ({ ...props }) => {
    return (
        <input
            type="text"
            {...props}
        />
    )
}

const DateInput = ({ ...props }) => {
    return (
        <Controller
            // control={control}
            name="activityDate"
            render={({ field }) => (
                <>
                    <DatePicker
                        {...field}
                        {...props}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="HH:mm dd/MM/YYYY"
                        placeholderText="בחר תאריך ושעה"
                    />
                </>
            )}
        />
    )
}

const DetailEdition = ({  InputType, ...editionProps }) => {
    return (
        <InputType {...editionProps} />
    )
}

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
    const editionProps = { value: editedValue, onChange: handleChange, onBlur: handleBlur }
    return (
        <div className="box-in-post" onDoubleClick={handleDoubleClick} onBlur={handleBlur}>
            <p>{title + ' - '}</p>
            <span onDoubleClick={handleDoubleClick}>{editedValue}</span>
            {isEditing && (
                <DetailEdition {...editionProps} InputType={TextInput} />
            )}
        </div>
    );
};

export default DetailBox