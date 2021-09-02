// Given an object of the stolen items and a string in lower cases representing the name of the pet (e.g. "rambo"), return:

//     "Rambo is gone..." if the name is on the list.
//     "Rambo is here!" if the name is not on the list.

// https://edabit.com/challenge/FBj5P49wwFzj2Jnfr

const findIt = (obj, name) => {
  let petName = name.charAt(0).toUpperCase() + name.slice(1);
  let output;
  if (Object.keys(obj).length === 0) return petName + " is here!";

  for (item in obj) {
    if (item === name) {
      output = petName + " is gone...";
    } else {
      output = petName + " is here!";
    }
  }
  return output;
};

console.log(findIt({}, "fido"));
