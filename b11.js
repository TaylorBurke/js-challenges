// https://edabit.com/challenge/7hrjegxToTSF4zAoM

function sayWhat(obj) {
  let str = "";
  for (key in obj) {
    str += obj[key] + " ";
  }
  str += obj[2];
  return str;
}

console.log(sayWhat({ 1: "did", 2: "I", 3: "do" }));
