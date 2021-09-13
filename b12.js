// https://edabit.com/challenge/paMpZoEJ6gr4feMS3

function getVodkaBottle(obj, num) {
  for (prop in obj) {
    if (obj[prop] === num && prop.includes("Rammstein")) return prop;
  }
}
