// You prepare a list to send to the insurance company.
// As you finish, you notice you misformatted it.
// Given an object with at least one key/value pair, convert all the values to numbers.

// https://edabit.com/challenge/ttuBGpGu7w4Ec3spT

function convertToNumber(obj) {
  for (item in obj) {
    obj[item] = +obj[item];
  }
  return obj;
}
