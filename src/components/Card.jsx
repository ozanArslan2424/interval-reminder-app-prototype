import './cardcontent.css'
export default function Card() {
    return (
        <div className="card">
            <h2 className="card-title">Hatırlatıcını ayarla</h2>
            <h3 className="card-subtitle">Subtitle</h3>
            <div className="card-content">
            <button className="minus button">-</button>
            <div className="mid-container">
            <div className="numbers-container">
                <div className="numbers">31</div>
                <div className="numbers-flip"></div>
            </div>
            <div className="interval-type">interval</div>
            </div>
            <button className="plus button">+</button>
        </div>
        </div>
    )
}