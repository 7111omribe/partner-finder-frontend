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

const DetailEdition = ({ InputType, ...editionProps }) => {
    return (
        <InputType {...editionProps} />
    )
}

const EditableParam = ({ value }) => {
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
                <DetailEdition {...editionProps} InputType={TextInput} />
            )}
        </div>
    );

}

const DetailBox = ({ title, value, isAdminVersion }) => {
    if (value === undefined) {
        return <div />
    }
    return (
        <div className="box-in-post">
            <p>{title + ' - '}</p>
            {isAdminVersion ? (
                <EditableParam value={value} />
            ) : (
                <div>value</div>
            )}
        </div>
    );
};

export default DetailBox