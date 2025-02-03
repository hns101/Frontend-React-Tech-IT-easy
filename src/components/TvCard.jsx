import '../styles/TvCard.css'
import TvCheckLine from "./TvCheckLine.jsx";
export default function tvCard(props) {
    return (
        <article className="card-tv" id={props.id}>
            <img src={props.src} className="tv-img" alt="Tv Photo" />
            <div className="tv-text-card">
            <h3 className="tv-text-name">{props.title}</h3>
            <p className="tv-text-price">{props.price}</p>
            <p className="tv-text-sises">{props.sizes}</p>
            <TvCheckLine input={props.input} />
            </div>
        </article>
    );
}