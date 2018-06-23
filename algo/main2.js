function sym(args) {
  let sets = [];
  let arg = Array.prototype.slice.call(arguments, 0);
  arg.forEach(array => {
    sets.push(...array);
  });
  console.log(sets);
  //   const unique = [...new Set(sets)];
  //pour retirer les doublons
  //   console.log(unique);

  //   let unique = sets.filter((value, index) => {
  //     return sets.indexOf(value) == index;
  //   });
  //   console.log(unique);

  let counter = [];
  for (let i = 0; i < sets.length; ++i) {
    if (counter[sets[i]]) counter[sets[i]]++;
    else counter[sets[i]] = 1;
  }
  return counter;
}

let test = sym([1, 2, 3], [5, 2, 1, 4], [5, 8, 0]);
console.log(test);
