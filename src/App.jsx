import './App.css';
import { inventory } from "./constants/inventory.js";
import { bestSellingTv } from "./constants/inventory.js";
import SoldTVs from "./helpers/SoldTVs.js";
import TVsInStock from "./helpers/TVsInStock.js";
import TVsToSell from "./helpers/TVsToSell.js";
import TVName from "./helpers/TVName.js";
import TVPrice from "./helpers/TVPrice.js";
import TVSises from "./helpers/TVSises.js";
import TVImage from "./helpers/TVImage.js";
import check from "./assets/check.png";
import uncheck from "./assets/minus.png";
// import TVCheckLine from "./components/TVCheckLine.jsx";


function App() {


  return (<>
    <header><h1>Tech It Easy Dashboard</h1></header>
    <main>
      <div id="outer-container-view">
        <h2>Verkoopoverzicht</h2>
        <div id="inner-container-card">
          <div className="card" id="bg-2">
            <h1 className="counter">{SoldTVs(inventory)}</h1>
            <h3>Aantal verkocht producten</h3>
          </div>
          <div className="card" id="bg-1">
            <h1 className="counter">{TVsInStock(inventory)}</h1>
            <h3>Aantal ingekochte producten</h3>
          </div>
          <div className="card" id="bg-3">
            <h1 className="counter">{TVsToSell(inventory)}</h1>
            <h3>Aantal te verkopen producten</h3>
          </div>
        </div>
      </div>
      <div id="top-product-container">
      <h2>Best verkochte tv</h2>
        <div className="card" id="top-product-card">
          <img className="TV-IMG" src={TVImage(bestSellingTv)} />
          <div>
          <h3>{TVName(bestSellingTv)}</h3>
          <h3>{TVPrice(bestSellingTv)}</h3>
          <h4>{TVSises(bestSellingTv)}</h4>
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
