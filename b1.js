// You just returned home to find your mansion has been robbed!

// Given an object of the stolen items, return the total amount of the burglary (number).
// If nothing was robbed, return the string "Lucky you!".

function calculateLosses(obj) {
  if (Object.keys(obj).length === 0) return "Lucky you!";
  let losses = 0;
  for (item in obj) {
    losses = losses + obj[item];
  }
  return losses;
}

console.log(calculateLosses({ shoes: 100, dog: 4000 }));
