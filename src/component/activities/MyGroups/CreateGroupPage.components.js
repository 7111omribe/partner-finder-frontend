import React, { useContext, useState, useEffect } from 'react';
import SemiPage from '../../../toolsComponents/SemiPage.components';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CreateGroupPage.css';
import { UserDataContext } from '../../../App';
import { ActivitiesListContext } from '../ActivitiesPage.components';
import { paramToInt } from '../../../logic/utils';


const CreateGroupPage = ({ onCancel, activity }) => {
    const {
        control,
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedActivity, setSelectedActivity] = useState(activity);
    const [selectedActivityType, setSelectedActivityType] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const { userData, locationData } = useContext(UserDataContext);
    const { activitiesList } = useContext(ActivitiesListContext);

    const handleActivityTypeChange = (activityType) => {
        setSelectedActivityType(activityType);
        setValue('activityType', activityType?.value || undefined);
    }

    const onSubmit = async (data) => {
        try {
            let formCleanedData = Object.fromEntries(
                Object.entries(data).filter(([_, value]) => value !== "" && value !== undefined)
            );
            formCleanedData = paramToInt(formCleanedData, 'minParticipants') // todo get number params from code, or config
            formCleanedData = paramToInt(formCleanedData, 'maxParticipants')
            formCleanedData = paramToInt(formCleanedData, 'myMembersNum')
            const response = await fetch('http://localhost:4000/postsActions/createPost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData: formCleanedData, userId: userData['user_id'], locationId: locationData['location_id'] }),
            });

            if (response.status === 201) {
                // todo add pop-up
                console.log('hoy')
                onCancel();
            }
            else { setErrorMessage('קרתה תקלה, שווה לנסות שוב עוד דקה'); }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('קרתה תקלה, שווה לנסות שוב עוד דקה');
        }
    };

    const activityTypesOption = [
        { value: 'טרק', label: 'טרק' },
        { value: 'סדנה', label: 'סדנה' },
        { value: 'אטרקציה', label: 'אטרקציה' },
        { value: 'סיור', label: 'סיור' },
        { value: 'טיול יום', label: 'טיול יום' },
    ]; // todo to conf

    useEffect(() => {
        setValue('activity', selectedActivity?.value || null);
        const selectedFullActivity = selectedActivity ? activitiesList.find(activityFull => activityFull.activity_id === selectedActivity['value']) : {};
        setValue('title', selectedFullActivity['activity_name']);
        setValue('activityTime', selectedFullActivity['activity_time']);
        const activityType = selectedFullActivity['activity_type']
        if (activityType) {
            handleActivityTypeChange({ value: activityType, label: activityType });
        }
    }, [selectedActivity]);

    return (
        <SemiPage onCancel={onCancel}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="activity">פעילות</label>
                    <Select
                        {...register('activity')}
                        options={activitiesList.map(activity => ({
                            value: activity.activity_id,
                            label: activity.activity_name,
                        }))}
                        value={selectedActivity}
                        placeholder={'בחר פעילות'}
                        onChange={(selectedOption) => {
                            setSelectedActivity(selectedOption)
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">כותרת</label>
                    <input type="text" id="title" {...register('title', { required: 'זהו שדה חובה' })} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">תיאור</label>
                    <input
                        type="text"
                        id="description"
                        {...register('description')}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="activityDate">תאריך ושעה</label>
                    <Controller
                        control={control}
                        name="activityDate"
                        render={({ field }) => (
                            <>
                                <DatePicker
                                    {...field}
                                    selected={selectedDate}
                                    onChange={(date) => {
                                        setValue('activityDate', date);
                                        setSelectedDate(date);
                                    }}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="HH:mm dd/MM/YYYY"
                                    placeholderText="בחר תאריך ושעה"
                                />
                            </>
                        )}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="activityType">סוג פעילות</label>
                    <Select
                        id='activityType'
                        {...register('activityType')}
                        options={[
                            { label: 'בחר סוג פעילות', value: null },
                            ...activityTypesOption
                        ]}
                        placeholder={'בחר סוג פעילות'}
                        defaultValue={{ label: 'בחר סוג פעילות', value: null }}
                        value={selectedActivityType}
                        onChange={handleActivityTypeChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="activityTime">כמה זמן הפעילות</label>
                    <input
                        type="text"
                        id="activityTime"
                        {...register('activityTime', { required: 'זהו שדה חובה' })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="minParticipants">מספר משתתפים מינימלי</label>
                    <input
                        type="number"
                        id="minParticipants"
                        {...register('minParticipants', {
                            required: 'זהו שדה חובה',
                            min: { value: 2, message: 'הזן מספר גדול מ-1' },
                        })}
                        defaultValue={2}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maxParticipants">מספר משתתפים מקסימלי</label>
                    <input
                        type="number"
                        id="maxParticipants"
                        {...register('maxParticipants', {
                        })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="myMembersNum">כמה אנשים כבר יש? (כולל אותי)</label>
                    <input
                        type="number"
                        id="myMembersNum"
                        {...register('myMembersNum', {
                            required: 'זהו שדה חובה',
                            min: { value: 1, message: 'הזן מספר גדול מ-0' },
                        })}
                        defaultValue={1}
                    />
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit">צור פוסט</button>
            </form>
        </SemiPage>
    );
};

export default CreateGroupPage;
