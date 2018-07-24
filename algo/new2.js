function fileName(chaine) {
  const regex = new RegExp("/d");
  let x = chaine.splice(regex, "");
  console.log(x);
}

console.log(fileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"));
