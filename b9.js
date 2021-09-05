// Given an object with a list of the stolen items, return a copy of that list without the values below 5000.

// https://edabit.com/challenge/Cve45maGdj5XtQXgo

function filterValues(obj) {
  let copy = { ...obj };
  for (let i in copy) {
    if (copy[i] < 5000) {
      delete copy[i];
    }
  }
  return copy;
}
