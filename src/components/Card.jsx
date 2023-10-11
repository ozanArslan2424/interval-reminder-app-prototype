
import { useState } from 'react';
import './cardcontent.css'
export default function Card() {
    const [selectedInterval, setSelectedInterval] = useState('saat');
    const intervalOptions = ['saat', 'gün', 'hafta', 'ay', 'yıl'];

    const handleIntervalChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedInterval(selectedValue);
        setNumber(1);
    };

    const [number, setNumber] = useState(1);

    const handleIncrement = () => {
        if (selectedInterval === 'yıl') {
            setNumber(currNumber => currNumber + 1);
            number > 1 && alert('o kadar da değil !!!');
            setNumber(2);
        } else (
            setNumber(currNumber => currNumber + 1)
        )
    };
    const handleDecrement = () => {
        number >= 1 && setNumber(currNumber => currNumber - 1);
    };


    const handleIncrementFive = () => {
        if (selectedInterval === 'yıl') {
            setNumber(currNumber => currNumber + 5);
            number > 1 && alert('o kadar da değil !!!');
            setNumber(2);
        } else (
            setNumber(currNumber => currNumber + 5)
        )
    };
    const handleDecrementFive = () => {
        number >= 1 && setNumber(currNumber => currNumber - 5);
    };

    return (
        <div className="card">
            <h2 className="card-title">Hatırlatıcını ayarla</h2>
            <input type="text" className="reminder-name" placeholder='Hatırlatıcı ismi:' />
            <select className="interval-type" onChange={handleIntervalChange} value={selectedInterval}>
                {intervalOptions.map((interval) => (
                    <option key={interval} value={interval}>
                        {interval}
                    </option>
                ))}
            </select>
            <div className="card-content">
                <div className="buttons-wrapper">
                    <button onClick={handleDecrement} className="minus button">-</button>
                    <button onClick={handleDecrementFive} className="plus-five button">+5</button>
                </div>
                <div className="mid-container">
                    <div className={(selectedInterval) + "-container container"}>
                        <div className={(selectedInterval) + "-amount numbers"}>{number}</div>
                        <div className={(selectedInterval) + "-flip flip"}></div>
                    </div>
                </div>
                <div className="buttons-wrapper">
                    <button onClick={handleIncrement} className="plus button">+</button>
                    <button onClick={handleIncrementFive} className="plus-five button">+5</button>
                </div>
            </div>
        </div>
    )
}