// Write a function that converts an object into an array,
// where each element represents a key-value pair in the form of an array.

function toArray(obj) {
  let out = [];
  for (key in obj) {
    out.push([key, obj[key]]);
  }
  return out;
}

console.log(
  toArray({
    size: "big",
    weight: 2103,
    texture: "fluffy",
    color: "white",
  })
);
