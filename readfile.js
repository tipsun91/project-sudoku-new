const fs = require('fs');

const fileContent = fs.readFileSync('sudoku-puzzles.txt', 'utf8');
function pushArray(text) {
  const arr = [];
  for (let i = 0; i < text.length; i++) {
    arr.push(text[i]);
  }
  return arr.join('');
}

console.log(pushArray(fileContent));

module.exports = pushArray;
