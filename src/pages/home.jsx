import { useState } from 'react';
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

    // const editReminder = (reminderIdEdit) => {

    // };

    const [success, setSuccess] = useState(false);

    const handleSignUpSuccess = () => {
        setSuccess(true);
    }

    return (
        <div className="main-wrapper">
            <h1>HOME</h1>
            <SignInCard />
            {!success && (<SignUpCard onSuccess={handleSignUpSuccess} />)}
            <ReminderSettingsCard reminders={reminders} setReminders={setReminders} />
            <ReminderListCard reminders={reminders} onDeleteReminder={deleteReminder} />
            <ReminderEditCard />
        </div>
    );
}
