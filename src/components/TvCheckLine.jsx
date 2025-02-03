import check from "../assets/check.png";
import uncheck from "../assets/minus.png";

export default function TvCheckLine(props) {
    let elements = [];
    for (let i = 0; i < props.input.options.length; i++) {
        elements.push(
            <img className="icon-check"
                 src={props.input.options[i].applicable ? check : uncheck}
                 alt={props.input.options[i].applicable ? "check" : "uncheck"} />,
            <span>{` ${props.input.options[i].name} `}</span>
        );

    }
    return (<>
        <p>{elements}</p>
        </>)
}
