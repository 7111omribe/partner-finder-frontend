import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const TextInput = ({ editedValue, setEditedValue, finishEditing }) => {
    const handleChange = (e) => {
        setEditedValue(e.target.value);
    };

    const handleBlur = () => {
        finishEditing();
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

const DateInput = ({ editedValue, setEditedValue, finishEditing }) => { // todo missing time bug
    const handleChange = (date) => {
        setEditedValue(date.toJSON())
    }
    return (
        <DatePicker
            selected={new Date(editedValue)}
            onChange={handleChange}
            onClickOutside={finishEditing}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="HH:mm dd/MM/YYYY"
            placeholderText="בחר תאריך ושעה"
        />

    )
}

export { DateInput, TextInput };
