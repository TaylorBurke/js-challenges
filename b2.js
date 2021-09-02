// Given an object of stolen items, return the most expensive item on the list.
// https://edabit.com/challenge/yMEs8bXPyZenPEYLM

function mostExpensiveItem(obj) {
  let mostExpensivePrice = Math.max(...Object.values(obj));
  for (item in obj) {
    if (obj[item] === mostExpensivePrice) {
      return item;
    }
  }
}
console.log(mostExpensiveItem({ package: 10 }));
