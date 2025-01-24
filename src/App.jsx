import './App.css';

function App() {
  return (<>
    <header><h1>Tech It Easy Dashboard</h1></header>
    <main>
      <div id="outer-container-view">
        <h2>Verkoopoverzicht</h2>
        <div id="inner-container-card">
          <div className="card" id="card-sold">
            <h1 className="counter">33</h1>
            <h3>Aantal verkocht producten</h3>
          </div>
          <div className="card" id="card-purchase">
            <h1 className="counter">73</h1>
            <h3>Aantal ingekochte producten</h3>
          </div>
          <div className="card" id="card-selling">
            <h1 className="counter">40</h1>
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
