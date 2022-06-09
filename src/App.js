import { useState, useEffect } from "react";

function Select({ coins }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onChangeOption = (event) => {
    setSelectedIndex(event.target.selectedIndex);
  };

  const [money, setMoney] = useState(0);
  const [calculateCoin, setCalculateCoin] = useState(0);
  const onChangeMoney = (event) => setMoney(event.target.value);

  const calculate = () =>
    setCalculateCoin(money / coins[selectedIndex].quotes.USD.price);

  console.log("Select");
  return (
    <div>
      $
      <input
        onChange={onChangeMoney}
        value={money}
        type="text"
        placeholder="input money"
      />
      ->
      <select onChange={onChangeOption}>
        {coins.map((item) => (
          <option key={item.id} value={item.quotes.USD.price}>
            {item.name} ({item.symbol}) : ${item.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <button onClick={calculate}>Calculate!</button>
      <div>
        exchange coin => {calculateCoin} {coins[selectedIndex].symbol}
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  console.log("App load");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=20")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>
      {loading ? <strong>Loading...</strong> : <Select coins={coins} />}
    </div>
  );
}

export default App;
