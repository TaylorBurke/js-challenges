// // https://edabit.com/challenge/WCMC8X9z7758hq4gP

// Create a function that returns the thickness (in meters) of a
// piece of paper after folding it n number of times.
// The paper starts off with a thickness of 0.5mm.

let numLayers = (n, x = 0.0005) =>
  n < 1 ? x + "m" : numLayers(n - 1, (x += x));

// function numLayers(n) {
//   let thickness = 0.5;
//   for (let i = 0; i < n; i++) thickness *= 2;
//   return thickness / 1000 + "m";
// }

console.log(numLayers(4));
