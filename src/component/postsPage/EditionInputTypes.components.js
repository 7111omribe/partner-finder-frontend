import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const TextInput = ({ editedValue, setEditedValue, setIsEditing }) => {
    const handleChange = (e) => {
        setEditedValue(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
        <input
            type="text"
            value={editedValue}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    )
}

const DateInput = ({ editedValue, setEditedValue, setIsEditing }) => {
    const handleChange = (date) => {
        setEditedValue(date.toJSON())
    }
    return (
        <DatePicker
            selected={new Date(editedValue)}
            onChange={handleChange}
            onClickOutside={() => { setIsEditing(false) }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
        // dateFormat="HH:mm dd/MM/YYYY"
        // placeholderText="בחר תאריך ושעה"
        />

    )
}

export { DateInput, TextInput };
