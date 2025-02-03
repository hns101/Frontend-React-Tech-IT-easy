import './styles/App.css';
import { inventory } from "./constants/inventory.js";
import { bestSellingTv } from "./constants/inventory.js";
import soldTvs from "./helpers/soldTvs.js";
import tvsInStock from "./helpers/tvsInStock.js";
import tvsToSell from "./helpers/tvsToSell.js";
import tvName from "./helpers/tvName.js";
import tvPrice from "./helpers/tvPrice.js";
import tvSizes from "./helpers/tvSizes.js";
import tvImage from "./helpers/tvImage.js";
import check from "./assets/check.png";
import uncheck from "./assets/minus.png";
import AmountCard from "./components/AmountCard";
import TvCard from "./components/TvCard";

function App() { return (<>
    <header><h1>Tech It Easy Dashboard</h1></header>
    <main>
      <section id="outer-container-view">
        <h2>Verkoopoverzicht</h2>
        <div id="inner-container-card">
          <AmountCard title="Aantal verkocht producten" value={soldTvs(inventory)} id="bg-2" />
          <AmountCard title="Aantal ingekochte producten" value={tvsInStock(inventory)} id="bg-1" />
          <AmountCard title="Aantal te verkopen producten" value={tvsToSell(inventory)} id="bg-3" />
        </div>
      </section>
      <div id="top-product-container">
      <h2>Best verkochte tv</h2>
        <TvCard className="card" id="top-product-card"
                src={tvImage(bestSellingTv)} title={tvName(bestSellingTv)}
                price={tvPrice(bestSellingTv)} sizes={tvSizes(bestSellingTv)}
                input={bestSellingTv} />
      </div>
    </main>
    <footer>
      <div className="footer-container">
        <button type="button" onClick={() => console.log("Meest verkocht eerst!")}>Meest verkocht eerst</button>
        <button type="button" onClick={() => console.log("Goedkoopste eerst!")}>Goedkoopste eerst</button>
        <button type="button" onClick={() => console.log("Meest geschikt voor sport eerst!")}>Meest geschikt voor sport eerst</button>
      </div>
    </footer>
  </>)
}

export default App
