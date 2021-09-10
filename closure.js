const makeAdder = (x) => {
  return (y) => x + y;
};

let add1 = makeAdder(1);

// console.log(add1(3));

const makeMultiplier = (x) => {
  return (y) => x * y;
};

let multiply9by2 = makeMultiplier(2)(9);

console.log(multiply9by2);
