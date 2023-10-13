import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cardcontent.css'
import PropTypes from 'prop-types';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

const ReminderListCard = ({ reminders, onDeleteReminder, onEditReminder }) => {
    return (
        <div className="card">
            <h2 className="card-title">Hatırlatıcılar:</h2>
            <ol className='reminderlist'>
                {reminders.map((reminder) => (
                    <li key={reminder.id} className='reminderlist-item segment'>
                        <span className="reminderlist-name">{reminder.name}:</span>
                        <span className="spacer"></span>
                        <span className="reminderlist-interval">{reminder.amount} {reminder.interval} aralıklı.</span>
                        <button
                            className="reminderlist-buttons edit button"
                            onClick={() => onEditReminder(reminder.id)}
                        >
                            <FontAwesomeIcon icon={faPen} size="m" />
                        </button>
                        <button
                            className="reminderlist-buttons delete button"
                            onClick={() => onDeleteReminder(reminder.id)}
                        >
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

ReminderListCard.propTypes = {
    reminders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            interval: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteReminder: PropTypes.func.isRequired,
    onEditReminder: PropTypes.func.isRequired,
};

export default ReminderListCard;
