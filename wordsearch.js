//LHL wordsearch.js implemented in pair programming with John O'Halloran

const wordSearch = (letters, word) => {
  if (letters.length > 0) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {

      if (l.includes(word)) return true;
    }

    const verticalJoin = [];

    for (let i = 0; i < letters[0].length; i++) {
      verticalJoin.push([]);

      for (let x = 0; x < letters.length; x++) {

        verticalJoin[i].push(letters[x][i]);
      }
      console.log(verticalJoin);
    }
    console.log(verticalJoin);
    const verticalJoinCheck = verticalJoin.map(ls => ls.join(''));
    for (const l of verticalJoinCheck) {
      if (l.includes(word)) return true;
    }

    return false;
  }
  return false;
};

module.exports = wordSearch;