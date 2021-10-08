let orders = [
  { amount: 250 },
  { amount: 350 },
  { amount: 210 },
  { amount: 25 },
];

let totalAmount = orders.reduce((sum, order) => {
  return sum + order.amount;
}, 0);

let carLot = [
  {
    stall: 1,
    make: "Ford",
    model: "F150",
    color: "gray",
    miles: 151300,
    year: 2002,
    price: 29000,
  },
  {
    stall: 2,
    make: "Mazda",
    model: "Miata",
    color: "red",
    miles: 26500,
    year: 2019,
    price: 21000,
  },
  {
    stall: 3,
    make: "Mercedez",
    model: "4Matic",
    color: "black",
    miles: 2100,
    year: 2015,
    price: 42000,
  },
];

// customers want to haggle
// make a function that returns an object with each stall and
// the lowest price the stalls car may sell for as objects
// calculate lowest selling price based on the following formula
// asking price * (100 - (2021 - year)) / 100
// do not discount any car below 90% of its asking price unless the car has over 100k miles
// cars with over 100k miles may be discounted no more than 82% of asking price

let getLowestPrice = (car) => {
  let askingPrice = car.price;
  let lowestPercent = askingPrice * 0.9;
  let yearDeprecation = (askingPrice * (100 - (2021 - car.year))) / 100;

  if (car.miles > 100000) {
    lowestPercent = askingPrice * 0.82;
  }

  return Math.max(yearDeprecation, lowestPercent);
};

let priceSheet = carLot.reduce((cars, car) => {
  cars[car.stall] = getLowestPrice(car);
  return cars;
}, {});

console.log(priceSheet);
