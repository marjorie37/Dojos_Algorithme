// expected output : [ (["Tokyo", "Kyoto"], ["London", "Donlon"], ["Rome"], ["Paris"])
// ];

//this version groups each city with the other city which has the same group of letters

// function regroupCities(cities = []) {
//   cities.forEach(elt => {
//     let t = elt
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("");
//     console.log([elt]);
//     if (cities.hasOwnProperty(t)) {
//       cities[t].push(elt);
//     } else {
//       cities[t] = [elt];
//     }
//   });
//   console.log(Object.values(cities));
// }

// let test = regroupCities([
//   "Tokyo",
//   "London",
//   "Rome",
//   "Donlon",
//   "Kyoto",
//   "Paris"
// ]);

//  [ (["Tokyo", "Kyoto"], ["London", "Donlon"], ["Rome"], ["Paris"])
// ];

//this version rotates the letters one by one :

const getWordRotations = word =>
  [...word].reduce(
    acc => [acc[0].substring(1) + acc[0].substring(0, 1), ...acc],
    [word]
  );

const groupCitiesByRotatedNames = cities =>
  cities.reduce((acc, city) => {
    const cityGroup = acc.find(item =>
      getWordRotations(city.toLowerCase()).includes(item[0].toLowerCase())
    );

    cityGroup
      ? acc.splice(acc.indexOf(cityGroup), 1, [...cityGroup, city])
      : acc.push([city]);

    return acc;
  }, []);

const test = groupCitiesByRotatedNames([
  "Tokyo",
  "London",
  "Rome",
  "Donlon",
  "Kyoto",
  "Paris"
]);

console.log(test);

// If you rotate the letters of each city you may or may not match another city. In case you do, put them together in a citiesay on their own.
