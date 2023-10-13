import { useState } from 'react';
import ReminderSettingsCard from '../components/ReminderSettingsCard';
import ReminderListCard from '../components/ReminderListCard';

export default function Home() {
    const [reminders, setReminders] = useState([]);

    const deleteReminder = (reminderId) => {
        const updatedReminders = reminders.filter(reminder => reminder.id !== reminderId);
        setReminders(updatedReminders);
    };

    const editReminder = (reminderId) => {
        
    };

    return (
        <div className="main-wrapper">
            <h1>HOME</h1>
            <ReminderSettingsCard reminders={reminders} setReminders={setReminders} />
            <ReminderListCard reminders={reminders} onDeleteReminder={deleteReminder} onEditReminder={editReminder} />
        </div>
    );
}
