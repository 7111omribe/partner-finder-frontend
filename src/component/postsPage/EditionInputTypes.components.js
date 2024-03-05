import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from "react-hook-form";



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

export { DateInput, TextInput };
