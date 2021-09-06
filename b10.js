// Given an object of the stolen items and a limit,
// return the difference between the total value of those items
// and the limit of the policy.

// https://edabit.com/challenge/8s2jy9hR2TAeQinKD

function calculateDifference(obj, limit) {
  let total = 0;
  for (let i in obj) {
    total += obj[i];
  }
  return total - limit;
}
