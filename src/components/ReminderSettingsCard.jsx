import { useState } from 'react';
import PropTypes from 'prop-types';
import './cardcontent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ReminderSettingsCard({ reminders, setReminders }) {
    const [reminderName, setReminderName] = useState();
    const handleReminderNameChange = (event) => {
        setShowError(false);
        setReminderName(event.target.value);
    };

    const [selectedInterval, setSelectedInterval] = useState('saat');
    const intervalOptions = ['saat', 'gün', 'hafta', 'ay', 'yıl'];

    const handleIntervalChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedInterval(selectedValue);
        setNumber(1);
    };

    const [number, setNumber] = useState(1);

    const handleIncrement = () => {
        selectedInterval === 'yıl' ? (number > 1 ? alert('o kadar da değil !!!') : setNumber(currNumber => currNumber + 1)) : setNumber(currNumber => currNumber + 1);
    }
    const handleDecrement = () => {
        number >= 2 && setNumber(currNumber => currNumber - 1);
    };


    const handleIncrementFive = () => {
        selectedInterval === 'yıl' ? (setNumber(currNumber => currNumber + 5), number > 1 && alert('o kadar da değil !!!'), setNumber(2)) : setNumber(currNumber => currNumber + 5);

    };
    const handleDecrementFive = () => {
        number >= 4 ? setNumber(currNumber => currNumber - 5) : setNumber(1);

    };


    const [showError, setShowError] = useState(false);
    const handleReminderSubmit = () => {
        if (reminderName === undefined) {
            setShowError(true);
        } else {
            const newReminder = {
                name: reminderName,
                interval: number + " " + selectedInterval,
            };
            setReminders([...reminders, newReminder]);
            setReminderName('');
            setShowError(false);
            console.log(newReminder);
        }
    }

    return (
        <div className="card">
            <h2 className="card-title">Hatırlatıcını ayarla</h2>

            <input name='reminder-name' onChange={handleReminderNameChange} type="text" className="segments reminder-name" placeholder='Hatırlatıcı ismi:' value={reminderName} required />
            {showError && (<p className='remindername-error'>İsim koymadan olmaz...</p>)}

            <select name='interval-type' className="segments interval-type" onChange={handleIntervalChange} value={selectedInterval}>
                {intervalOptions.map((interval) => (
                    <option key={interval} value={interval}>
                        {interval}
                    </option>
                ))}
            </select>
            <div className="center-flex card-content">
                <div className="buttons-wrapper">
                    <button onClick={handleDecrement} className="minus button"><FontAwesomeIcon size="2xs" icon={faMinus} /></button>
                    <button onClick={handleDecrementFive} className="minus button"><FontAwesomeIcon size="2xs" icon={faMinus} />5</button>
                </div>
                <div className={(selectedInterval) + "-container container"}>
                    <div className={(selectedInterval) + "-amount numbers center-flex"}>{number}</div>
                    {/* <div className={(selectedInterval) + "-flip flip"}></div> */}
                </div>
                <div className="buttons-wrapper">
                    <button onClick={handleIncrement} className="plus button"><FontAwesomeIcon size="2xs" icon={faPlus} /></button>
                    <button onClick={handleIncrementFive} className="plus button"><FontAwesomeIcon size="2xs" icon={faPlus} />5</button>
                </div>
            </div>

            <button onClick={handleReminderSubmit} className="segments submit" type="submit">{number} {selectedInterval} aralıklı bir hatırlatıcı kur!</button>
        </div>
    )
}

ReminderSettingsCard.propTypes = {
    reminders: PropTypes.array.isRequired,
    setReminders: PropTypes.func.isRequired,
};