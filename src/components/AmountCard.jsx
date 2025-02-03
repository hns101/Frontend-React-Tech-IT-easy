import '../styles/AmountCard.css';

export default function amountCard(props) {
    return (
        <article className="card" id={props.id}>
            <h1 className="counter">{props.value}</h1>
            <p className="counter-text">{props.title}</p>
        </article>
    );
}