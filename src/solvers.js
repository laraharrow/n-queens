/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n rooks placed such that none of them can attack each other

window.nRooksDecisionTree = function(n) {
  var solutions = [];

  var recursion = function(board, row) {
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        row++;
        if (row < n) {
          recursion(board, row);
        } else {
          var newRows = [];
          for (var arr of board.rows()) {
            newRows.push(arr.slice());
          }
          solutions.push(new Board(newRows));
        }
        row--;
      }
      board.togglePiece(row, col);
    }
  };    
  recursion(new Board({'n': n}), 0);
  return solutions;
};

window.findNRooksSolution = function(n) {
  return nRooksDecisionTree(n)[0].rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  return nRooksDecisionTree(n).length;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
