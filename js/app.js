const cars = JSON.parse(DATA);
console.log(cars);
const showcaseEl = document.getElementById("showcase");

// {
//     "id": "89aed5b8c686ebd713a62873e4cd756abab7a106",
//     "make": "BMW",
//     "model": "M3",
//     "year": 2010,
//     "img": "http://dummyimage.com/153x232.jpg/cc0000/ffffff",
//     "color": "Goldenrod",
//     "vin": "1G6DW677550624991",
//     "country": "United States",
//     "rating": 1,
//     "price": 2269,
//     "views": 5,
//     "seller": "Ellery Girardin",
//     "vin_check": true,
//     "top": false,
//     "timestamp": 1601652988000,
//     "phone": "+1 (229) 999-8553",
//     "fuel": "Benzin",
//     "engine_volume": 1.4,
//     "transmission": "CVT",
//     "odo": 394036,
//     "consume": {
//       "city": 12.3,
//       "mixed": 8.4
//     }
//   },

renderCards(showcaseEl, cars);

function renderCards(elemToRender, dataArray) {
  elemToRender.innerHTML = createCardsHtml(dataArray).join("");
}

function createCardsHtml(dataArray) {
  return dataArray.map((data) => createCardHtml(data));
}

function createCardHtml(cardData) {
  return `<div class="card">
    <img src="${cardData.img}" alt="${cardData.make} ${
    cardData.model
  }" class="card-img">
    <div class="card-body">
      <h2>${cardData.make} ${cardData.model} (${cardData.engine_volume} l) ${
    cardData.year
  }</h2>
      <h3>${cardData.price} $</h3>
      <ul class="features-list">
      <li class="list-item">${cardData.odo}</li>
      <li class="list-item">${cardData.fuel}</li>           
      <li class="list-item">${cardData.consume}</li>
      <li class="list-item">${cardData.transmission}</li>
      </ul>
      <div>
      <span class="vin-code">${cardData.vin ?? "No vin code added"}</span>
      </div>
      <a href="tel:=${cardData.phone}">Call to ${cardData.seller}</a>
    </div>
  </div>`;
}
