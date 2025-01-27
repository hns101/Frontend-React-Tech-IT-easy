import './App.css';
import { inventory } from "./constants/inventory.js";
import SoldTVs from "./helpers/SoldTVs.js";
import TVsInStock from "./helpers/TVsInStock.js";
import TVsToSell from "./helpers/TVsToSell.js";

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
        <div className="card" id="top-product-card"></div>
      </div>
    </main>
  </>)
}

export default App
