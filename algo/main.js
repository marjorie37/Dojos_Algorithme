function CheckIfPrime(numbers_array) {
  tab = [];
  numbers_array.forEach(elt => {
    tab.push(Math.floor(Math.sqrt(elt)));
    console.log(tab);
  });
}

let test = CheckIfPrime([32, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53]);
