import CardContent from "./CardContent"

export default function Card() {
    return (
        <div className="card">
            <h2 className="card-title">Title</h2>
            <h3 className="card-subtitle">Subtitle</h3>
            <CardContent/>
            <div className="interval-type">hour/day/week/month/year</div>
        </div>
    )
}