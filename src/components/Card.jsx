
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
        if (selectedInterval === 'years') {
            setNumber(number + 1);
            number > 1 && alert('o kadar da değil !!!');
            setNumber(2);
        } else (
            setNumber(number + 1)
        )
    };

    const handleDecrement = () => {
        number >= 1 && setNumber(number - 1);
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
                <button onClick={handleDecrement} className="minus button">-</button>
                <div className="mid-container">

                    <div className={(selectedInterval) + "-container container"}>
                        <div className={(selectedInterval) + "-amount numbers"}>{number}</div>
                        <div className={(selectedInterval) + "-flip flip"}></div>
                    </div>

                </div>
                <button onClick={handleIncrement} className="plus button">+</button>
            </div>
        </div>
    )
}