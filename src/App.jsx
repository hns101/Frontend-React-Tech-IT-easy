import './styles/App.css';
import { inventory } from "./constants/inventory.js";
import { bestSellingTv } from "./constants/inventory.js";
import soldTvs from "./helpers/soldTvs.js";
import tvsInStock from "./helpers/tvsInStock.js";
import tvsToSell from "./helpers/tvsToSell.js";
import tvName from "./helpers/tvName.js";
import tvPrice from "./helpers/tvPrice.js";
import tvSises from "./helpers/tvSises.js";
import tvImage from "./helpers/tvImage.js";
import check from "./assets/check.png";
import uncheck from "./assets/minus.png";
// import TVCheckLine from "./components/TVCheckLine.jsx";



function App() { return (<>
    <header><h1>Tech It Easy Dashboard</h1></header>
    <main>
      <div id="outer-container-view">
        <h2>Verkoopoverzicht</h2>
        <div id="inner-container-card">
          <div className="card" id="bg-2">
            <h1 className="counter">{soldTvs(inventory)}</h1>
            <h3>Aantal verkocht producten</h3>
          </div>
          <div className="card" id="bg-1">
            <h1 className="counter">{tvsInStock(inventory)}</h1>
            <h3>Aantal ingekochte producten</h3>
          </div>
          <div className="card" id="bg-3">
            <h1 className="counter">{tvsToSell(inventory)}</h1>
            <h3>Aantal te verkopen producten</h3>
          </div>
        </div>
      </div>
      <div id="top-product-container">
      <h2>Best verkochte tv</h2>
        <div className="card" id="top-product-card">
          <img className="TV-IMG" src={tvImage(bestSellingTv)} />
          <div>
          <h3>{tvName(bestSellingTv)}</h3>
          <h3>{tvPrice(bestSellingTv)}</h3>
          <h4>{tvSises(bestSellingTv)}</h4>
            <h4><img className="Icon-mark" src={check}/> wifi <img className="Icon-mark" src={uncheck}/> speech
              <img className="Icon-mark" src={check}/> hdr <img className="Icon-mark" src={check}/> bluetooth <img
                  className="Icon-mark" src={uncheck}/> ambilight</h4>
          </div>
        </div>
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
