import { StartTimeTab } from "../component/activities/StartTimeTab";
import { DateInput, TextInput } from "../component/postsPage/EditionInputTypes.components";

// const TextDisplay = ()

const POSTS_PARAMS = {
    'activityData.activityTime': {
        inputType: TextInput,
        valueDisplay: ({value}) => { return (<div>{value}</div>) }
    },
    'activityData.activityType': {
        inputType: TextInput,
        valueDisplay: ({value}) => { return (<div>{value}</div>) }
    },
    'postData.plannedDate': {
        inputType: DateInput,
        valueDisplay: ({value}) => { return (<StartTimeTab startTimeStr={value} />) }
    }
}

const INPUT_TYPE_TO_RENAMING_FUNCS = {
    TextInput: { 'editedValue': 'value', 'handleStartEditing': 'onChange', 'handleFinishEditing': 'onBlur' },
    DateInput: { 'editedValue': 'value', 'handleStartEditing': 'onChange', 'handleFinishEditing': 'onClickOutside' }
}

export { POSTS_PARAMS, INPUT_TYPE_TO_RENAMING_FUNCS };