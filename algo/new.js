// console.log(
//   "je suis un bouffeur de lasagne"
//     .split("")
//     .reverse()
//     .join("")
// );

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let args = [...arguments];
  let resultat = Math.floor(
    Math.sqrt(args.map(elt => elt * elt).reduce((acc, value) => acc + value)) /
      2
  );
  return resultat;
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
