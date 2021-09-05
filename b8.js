// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania.
// Given an object of the stolen items and an item name, return a copy without that item on the list.

// https://edabit.com/challenge/y4K6Mi7XfaauvoT3u

function removeEntry(obj, itemName) {
  let copy = { ...obj };
  for (let item in obj) {
    if (item === itemName) {
      delete copy[item];
    }
  }
  return copy;
}
