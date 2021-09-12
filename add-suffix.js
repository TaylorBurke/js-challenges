// https://edabit.com/challenge/Ra85gzkCTtXrNyCag

const add_ly = add_suffix("ly");

function add_suffix(suffix) {
  return (word) => word + suffix;
}

console.log(add_ly("hopeless"));
