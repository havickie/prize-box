const btc = `btc`;
const eth = 'eth';
const doge = 'bnb';


let ws = new WebSocket(
 `wss://stream.binance.com:9443/ws/${btc}usdt@trade`
)
let wsd = new WebSocket(
  `wss://stream.binance.com:9443/ws/${doge}usdt@trade`
 )
 let wse = new WebSocket(
  `wss://stream.binance.com:9443/ws/${eth}usdt@trade`
 )
let stockPriceElement = document.getElementById('btc-prize');
let stockPriceElement2 = document.getElementById('eth-prize');
let stockPriceElement3 = document.getElementById('doge-prize');
let lastPrice = null

ws.onmessage = (event) =>{
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
stockPriceElement.innerText = price


stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red'; 
lastPrice = price;
}

wse.onmessage = (event) =>{
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
stockPriceElement2.innerText = price


stockPriceElement2.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red'; 
lastPrice = price;
}

wsd.onmessage = (event) =>{
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
stockPriceElement3.innerText = price


stockPriceElement3.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red'; 
lastPrice = price;
}

