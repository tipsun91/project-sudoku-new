const fs = require('fs');
const cubeIndex = require('./cubeIndex.js');

function readFile() {
  const PATH = './sudoku-puzzles.txt';
  return fs.readFileSync(PATH, 'UTF-8');
}

function stringToArray(string) {
  return string.match(/^.+$/gm);
}

function buildSudoku(string) {
  return string.match(/(?:.){9}/gm).map(
    (pc) => pc.split('').map(
      (cc) => {
        let r = Number(cc);
        return isNaN(r) === false ? r : null;
      }
    )
  );
}

function check(dataArray, buffer) {
  for (let y = 0; y < dataArray.length; y++) {
    for (let x = 0; x < dataArray[y].length; x++) {
      if (typeof(dataArray[y][x]) === 'number') {
        let key = dataArray[y][x];
        buffer.x[key].push(x);
        buffer.y[key].push(y);

        let cIdx = cubeIndex(x, y);
        if (cIdx !== false) {
          buffer.c[key].push(cIdx);
        }
      }
    }
  }

  return buffer;
}

module.exports = [readFile, stringToArray, buildSudoku, check];
