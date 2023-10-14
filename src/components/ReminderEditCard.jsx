
import PropTypes from "prop-types";

const ReminderEditCard = () => {

    return (
        <div className="card">
            <h2>Düzenle:</h2>
        </div>
    );
}

export default ReminderEditCard;

// ReminderEditCard.propTypes = {
//     reminders: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             interval: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// }