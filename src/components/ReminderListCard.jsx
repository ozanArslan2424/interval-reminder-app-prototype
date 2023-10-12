import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cardcontent.css'
import PropTypes from 'prop-types';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function ReminderListCard({ reminders }) {
    return (
        <div className="card">
            <h2 className="card-title">Hatırlatıcılar:</h2>
            {/* <div className="segments"> */}
            <ol className='reminderlist'>
                {reminders.map((reminder, index) => (
                    <li key={index} className='reminderlist-item segments'>
                        <span className="reminderlist-name">{reminder.name}:</span> 
                        <span className="spacer"></span>
                        <span className="reminderlist-interval">{reminder.interval} aralıklı.</span>
                        <button className="reminderlist-delete button center-flex"><FontAwesomeIcon icon={faXmark} size="lg" /></button>
                    </li>
                ))}
            </ol>
            {/* </div> */}
        </div>
    )
}

ReminderListCard.propTypes = {
    reminders: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            interval: PropTypes.string.isRequired,
        })
    ).isRequired,
};
