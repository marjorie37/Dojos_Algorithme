//fonction qui met tous les caracteres en minuscules,
//cherche les doublons et les retire, fait un nouveau tableau
//sans doublon et compare la taille des 2 tableaux

function isIsogram(str) {
  let st = str.toLowerCase();
  console.log(st);
  const sansdoublon = [];
  const obj = {};

  for (i = 0; i < st.length; i++) {
    obj[st[i]] = 0;
  }
  for (j in obj) {
    sansdoublon.push(j);
    console.log(sansdoublon);
  }
  if (sansdoublon.length !== st.length) {
    return false;
  }
  {
    return true;
  }
}
//marche sur codewars...
isIsogram("abajDPANdhskOPeilzh");
