import '../app.css'
import ReminderSettingsCard from '../components/ReminderSettingsCard.jsx'
import ReminderListCard from '../components/ReminderListCard.jsx'
import { useState } from 'react';

export default function Home() {
    const [reminders, setReminders] = useState([]);
    return (
        <>
            <h1>HOME</h1>
            <div className="center-flex main-wrapper">
                <ReminderSettingsCard reminders={reminders} setReminders={setReminders} />
                <ReminderListCard reminders={reminders} />
            </div>
        </>
    )
}