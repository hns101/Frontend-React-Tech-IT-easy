import TvCard from './TvCard';
import tvImage from "../helpers/tvImage.js";
import tvName from "../helpers/tvName.js";
import tvPrice from "../helpers/tvPrice.js";
import tvSizes from "../helpers/tvSizes.js";

export default function TvCardLoader(props) {
    let elements = [];
    // eslint-disable-next-line react/prop-types
    for (let i = 0; props.input.length > i; i++) {
        elements.push(
            <TvCard className="card-tv" id="all-product-card"
                    src={tvImage(props.input[i])} title={tvName(props.input[i])}
                    price={tvPrice(props.input[i])} sizes={tvSizes(props.input[i])}
                    input={props.input[i]} key={i}
            />
        )
    }

    return (<>
        <div>{elements}</div>
        </>)
}