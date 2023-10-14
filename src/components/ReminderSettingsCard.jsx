import "./cardcontent.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ReminderSettingsCard = ({ reminders, setReminders }) => {
    const [reminderName, setReminderName] = useState("");
    const [selectedInterval, setSelectedInterval] = useState("saat");
    const [intervalAmount, setIntervalAmount] = useState(1);
    const [showError, setShowError] = useState(false);

    const intervalOptions = ["saat", "gün", "hafta", "ay", "yıl"];

    const handleReminderNameChange = (event) => {
        setShowError(false);
        setReminderName(event.target.value);
    };

    const handleIntervalChange = (event) => {
        setSelectedInterval(event.target.value);
        setIntervalAmount(1);
    };

    const handleAmountChange = (amount) => {
        if (selectedInterval === 'yıl' && intervalAmount + amount > 2) {
            alert('O kadar da değil !!!');
            setIntervalAmount(2);
        } else {
            setIntervalAmount(currAmount => currAmount + amount);
        }
    };

    const handleReminderSubmit = (e) => {
        e.preventDefault();
        if (reminderName.length < 4) {
            setShowError(true);
            return;
        }
        const newReminder = {
            id: uuidv4(),
            name: reminderName,
            amount: intervalAmount,
            interval: selectedInterval,
        };
        setReminders([...reminders, newReminder]);
        setReminderName('');
        setShowError(false);
    };

    return (
        <div className="card">
            <h2>Hatırlatıcını ayarla</h2>
            <form onSubmit={handleReminderSubmit}>
                <input
                    className="segment input reminder-name"
                    id="reminderName"
                    onChange={handleReminderNameChange}
                    type="text"
                    placeholder="Hatırlatıcı başlığı:"
                    value={reminderName}
                    required
                />
                {showError && <p className="error">Başlık 4 karakterden uzun olmalı.</p>}

                <select
                    className="segment button interval-type"
                    id="intervalType"
                    onChange={handleIntervalChange}
                    value={selectedInterval}
                >
                    {intervalOptions.map((interval) => (
                        <option key={interval} value={interval}>
                            {interval}
                        </option>
                    ))}
                </select>
                <div className="card-content">
                    <div className="flex-column">
                        <button className="minus button" type="button" onClick={() => { intervalAmount >= 2 ? handleAmountChange(-1) : setIntervalAmount(1) }}>
                            <FontAwesomeIcon size="2xs" icon={faMinus} />
                        </button>
                        <button className="minus button" type="button" onClick={() => { intervalAmount >= 5 ? handleAmountChange(-5) : setIntervalAmount(1) }}>
                            <FontAwesomeIcon size="2xs" icon={faMinus} />5
                        </button>
                    </div>
                    <div className={`${selectedInterval}-container container`}>
                        <div className={`${selectedInterval}-amount numbers`}>
                            {intervalAmount}
                        </div>
                    </div>
                    <div className="flex-column">
                        <button className="plus button" type="button" onClick={() => { handleAmountChange(1) }}>
                            <FontAwesomeIcon size="2xs" icon={faPlus} />
                        </button>
                        <button className="plus button" type="button" onClick={() => { handleAmountChange(5) }}>
                            <FontAwesomeIcon size="2xs" icon={faPlus} />5
                        </button>
                    </div>
                </div>
                <button className="segment button sign" type="submit">{intervalAmount} {selectedInterval} aralıklı bir hatırlatıcı kur!</button>
            </form>
        </div>
    );
};

ReminderSettingsCard.propTypes = {
    reminders: PropTypes.array.isRequired,
    setReminders: PropTypes.func.isRequired,
};

export default ReminderSettingsCard;
