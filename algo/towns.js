function regroupCities(cities = []) {
  cities.forEach(elt => {
    let t = elt
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    console.log([elt]);
    if (cities.hasOwnProperty(t)) {
      cities[t].push(elt);
    } else {
      cities[t] = [elt];
    }
  });
  console.log(Object.values(cities));
}

let test = regroupCities([
  "Tokyo",
  "London",
  "Rome",
  "Donlon",
  "Kyoto",
  "Paris"
]);
// console.log(test);
//  [ (["Tokyo", "Kyoto"], ["London", "Donlon"], ["Rome"], ["Paris"])
// ];

// If you rotate the letters of each city you may or may not match another city. In case you do, put them together in a citiesay on their own.
