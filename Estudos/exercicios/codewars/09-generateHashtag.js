// Link do desafio

const generateHashtag = ht => {
  ht = ht
    .split(" ")
    .filter(p => p !== "")
    .map(p => {
      let nP = p[0].toUpperCase();
      for (i in p) {
        if (i > 0) nP += p[i];
      }
      return nP;
    })
    .join("");

  return ht.length !== 0 && ht.length < 140 ? "#" + ht : false;
};

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(""));
