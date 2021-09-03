// Time to call your lover to inform what he/she lost in the burglary.

// Given an object of the stolen objects, return the 3rd most expensive item on the list.
// If that is not possible, because there are not enough items, return false.

function thirdMostExpensive(obj) {
  let getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  // get object values and order them in an array high to low, return the value that matches array[2]
  let arr = Object.values(obj);
  if (arr.length < 3) return false;
  arr.sort((a, b) => b - a);
  return getKeyByValue(obj, arr[2]);
}

console.log(
  thirdMostExpensive({
    toaster: 30,
    rug: 500,
    seranWrap: 2,
  })
);
