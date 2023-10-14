import { useState } from 'react';
// components
import ReminderSettingsCard from '../components/ReminderSettingsCard';
import ReminderListCard from '../components/ReminderListCard';
import ReminderEditCard from '../components/ReminderEditCard';
import SignInCard from '../components/SignInCard';
import SignUpCard from '../components/SignUpCard';

export default function Home() {
    const [reminders, setReminders] = useState([]);

    const deleteReminder = (reminderId) => {
        const updatedReminders = reminders.filter(reminder => reminder.id !== reminderId);
        setReminders(updatedReminders);
    };

    // const editReminder = (reminderIdEdit) => {};

    const [success, setSuccess] = useState(false);

    const handleSignUpSuccess = () => {
        setSuccess(true);
        console.log("Sign Up Success");
    }

    return (
        <>
            <h1>HOME</h1>
            <div className="content-wrapper">
                <SignInCard />
                {!success && (<SignUpCard onSuccess={handleSignUpSuccess} />)}
                <ReminderSettingsCard reminders={reminders} setReminders={setReminders} />
                {reminders.length > 0 && (<ReminderListCard reminders={reminders} onDeleteReminder={deleteReminder} />)}
                <ReminderEditCard />
            </div>
        </>
    );
}
