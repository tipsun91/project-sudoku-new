// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
    const regEpx = /([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})([\d\-]{3})/
    return boardString.replace(regEpx, `[$1$2$3][$4$5$6][$7$8$9][$10$11$12][$13$14$15][$16$17$18][$19$20$21][$22$23$24][$25$26$27]`)
    return boardString.replace(regEpx, `[[$1$4$7],[$2$5$8],[$3$6$9],[$10$13$16],[$11$14$17],[$12$15$18],[$19$22$25],[$20$23$26],[$21npm i$24$27]]`)
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
