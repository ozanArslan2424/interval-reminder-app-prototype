import './cardcontent.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';


const ReminderSettingsCard = ({ reminders, setReminders }) => {
    const [reminderName, setReminderName] = useState('');
    const [selectedInterval, setSelectedInterval] = useState('saat');
    const [intervalAmount, setIntervalAmount] = useState(1);
    const [showError, setShowError] = useState(false);

    const intervalOptions = ['saat', 'gün', 'hafta', 'ay', 'yıl'];

    const handleReminderNameChange = (event) => {
        setShowError(false);
        setReminderName(event.target.value);
    };

    const handleIntervalChange = (event) => {
        setSelectedInterval(event.target.value);
    };

    const handleIncrement = () => {
        if (selectedInterval === 'yıl' && intervalAmount > 1) {
            alert('O kadar da değil !!!');
        } else {
            setIntervalAmount(currAmount => currAmount + 1);
        }
    };

    const handleIncrementFive = () => {
        if (selectedInterval === 'yıl') {
            if (intervalAmount > 1) {
                alert('O kadar da değil !!!');
                setIntervalAmount(2);
            } else {
                setIntervalAmount(currAmount => currAmount + 5);
            }
        } else {
            setIntervalAmount(currAmount => currAmount + 5);
        }
    };

    const handleDecrement = () => {
        if (intervalAmount >= 2) {
            setIntervalAmount(currAmount => currAmount - 1);
        }
    };

    const handleDecrementFive = () => {
        if (intervalAmount >= 5) {
            setIntervalAmount(currAmount => currAmount - 5);
        } else {
            setIntervalAmount(1);
        }
    };

    const handleReminderSubmit = () => {
        if (reminderName.length < 4) {
            setShowError(true);
        } else {
            const newReminder = {
                id: uuidv4(),
                name: reminderName,
                amount: intervalAmount,
                interval: selectedInterval,
            };
            setReminders([...reminders, newReminder]);
            setReminderName('');
            setShowError(false);
        }
    };

    return (
        <div className="card">
            <h2 className="card-title">Hatırlatıcını ayarla</h2>
            <input
                className="segment reminder-name"
                id='reminderName'
                onChange={handleReminderNameChange}
                type="text"
                placeholder='Hatırlatıcı başlığı:'
                value={reminderName}
                required
            />
            {showError && <p className='remindername-error'>Başlık 4 karakterden uzun olmalı.</p>}

            <select
                className="segment interval-type"
                id='intervalType'
                onChange={handleIntervalChange}
                value={selectedInterval}
            >
                {intervalOptions.map((interval) => (
                    <option key={interval} value={interval}>
                        {interval}
                    </option>
                ))}
            </select>
            <div className="center-flex card-content">
                <div className="buttons-wrapper">
                    <button
                        className="minus button"
                        onClick={handleDecrement}
                    >
                        <FontAwesomeIcon size="2xs" icon={faMinus} />
                    </button>
                    <button
                        className="minus button"
                        onClick={handleDecrementFive}
                    >
                        <FontAwesomeIcon size="2xs" icon={faMinus} />5
                    </button>
                </div>
                <div className={`${selectedInterval}-container container`}>
                    <div className={`${selectedInterval}-amount numbers`}>{intervalAmount}</div>
                </div>
                <div className="buttons-wrapper">
                    <button
                        className="plus button"
                        onClick={handleIncrement}
                    >
                        <FontAwesomeIcon size="2xs" icon={faPlus} />
                    </button>
                    <button
                        className="plus button"
                        onClick={handleIncrementFive}
                    >
                        <FontAwesomeIcon size="2xs" icon={faPlus} />5
                    </button>
                </div>
            </div>
            <button
                onClick={handleReminderSubmit}
                className="segment submit"
                type="submit"
            >
                {intervalAmount} {selectedInterval} aralıklı bir hatırlatıcı kur!
            </button>
        </div>
    );
};

ReminderSettingsCard.propTypes = {
    reminders: PropTypes.array.isRequired,
    setReminders: PropTypes.func.isRequired,
};

export default ReminderSettingsCard;
