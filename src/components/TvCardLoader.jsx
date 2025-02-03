import TvCard from './TvCard';
import tvImage from "../helpers/tvImage.js";
import tvName from "../helpers/tvName.js";
import tvPrice from "../helpers/tvPrice.js";
import tvSizes from "../helpers/tvSizes.js";

export default function TvCardLoader(props) {
    let elements = [];
    // eslint-disable-next-line react/prop-types
    for (let i = 0; props.props.length > i; i++) {
        elements.push(
            <TvCard className="card-tv" id="top-product-card"
                    src={tvImage(props.props[i])} title={tvName(props.props[i])}
                    price={tvPrice(props.props[i])} sizes={tvSizes(props.props[i])}
                    input={props.props[i]} />
        )
    }

    return (<>
        <div>{elements}</div>
        </>)
}