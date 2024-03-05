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
        <DatePicker
            {...props}
            // selected={new Date(props.value)}
            // onClickOutside={props.onChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            // dateFormat="HH:mm dd/MM/YYYY"
            // placeholderText="בחר תאריך ושעה"
        />

    )
}

export { DateInput, TextInput };
