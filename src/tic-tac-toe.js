class TicTacToe {
currentPlayer = 'x';
gameField = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
    constructor() {

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer
    }
    
    nextTurn(rowIndex, columnIndex) {
        //if (this.gameField[rowIndex][columnIndex]){
        //    return;
        //}
this.gameField[rowIndex][columnIndex] = this.currentPlayer;
this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
return this.gameField.every(row => row.every(col => col))
    }

    isDraw() {
return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
