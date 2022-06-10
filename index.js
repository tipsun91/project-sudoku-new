const [readFile, stringToArray, buildSudoku, check] = require('./library.js');
let map = require('./map.js');

const dataText  = readFile();
const dataArray = stringToArray(dataText);
const sudoku = buildSudoku(dataArray[6]);
const checkResult = check(sudoku, map);

console.log(
  sudoku.map(
    (pc) => pc.map(
      (c) => {
        return c ? c : '-';
      }
    ).join('|')
  ).join('\n-----------------\n')
);
console.log(checkResult);
