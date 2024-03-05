import { DateInput, TextInput } from "../component/postsPage/EditionInputTypes.components";

const POSTS_PARAMS = {
    'activityData.activityTime':{
        inputType:TextInput
    },
    'activityData.activityType':{
        inputType:TextInput
    },
    'postData.plannedDate':{
        inputType:DateInput
    }
}

export {POSTS_PARAMS};