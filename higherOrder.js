let animals = [
  { name: "fluffy", species: "dog" },
  { name: "rex", species: "dog" },
  { name: "felix", species: "cat" },
  { name: "kitty", species: "cat" },
  { name: "harry", species: "rabbit" },
  { name: "skunk", species: "fish" },
];

let isDog = (animal) => {
  return animal.species === "dog";
};

let dogs = animals.filter(isDog);

let names = animals.map((animal) => animal.name);

console.log(names);
