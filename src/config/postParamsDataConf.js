import { DateInput, TextInput } from "../component/postsPage/EditionInputTypes.components";

const POSTS_PARAMS = {
    'activityData.activityTime': {
        inputType: TextInput
    },
    'activityData.activityType': {
        inputType: TextInput
    },
    'postData.plannedDate': {
        inputType: DateInput
    }
}

const INPUT_TYPE_TO_RENAMING_FUNCS = {
    TextInput: { 'editedValue': 'value', 'handleStartEditing': 'onChange', 'handleFinishEditing': 'onBlur' },
    DateInput: { 'editedValue': 'value', 'handleStartEditing': 'onChange', 'handleFinishEditing': 'onClickOutside' }
}

export { POSTS_PARAMS, INPUT_TYPE_TO_RENAMING_FUNCS };