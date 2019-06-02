import { useReducer, useEffect }, React from 'react';

/* Component with game variables & logic*/
function GameBoard(){

	//const [state, dispatch] = useReducer()
	const numMoves = 0
	const boardLength = 3
	const winner = null
	const board = new Array(boardLength)


	function checkHorizontal(marker, xPosition) {
		let allInARow = true
		for(let i = 0; i < boardLength && allInARow; i++) {
			if (board[xPosition][i] !== marker) {
				allInARow = false
			}
		}
		return allInARow
	}
	function checkVertical(marker, yPosition) {
		let allInARow = true
		for(let i = 0; i < boardLength && allInARow; i++) {
			if (board[i][yPosition] !== marker) {
				allInARow = false
			}
		}
		return allInARow
	}
	function isPositionOnUpwardDiag(position) {
		return (position.x + position.y === boardLength - 1)
	}
	function isPositionOnDownwardDiag(position) {
		return (position.x === position.y)
	}
	function checkUpwardDiag(marker) {
		let allInARow = true
		for (let i = 0; i < boardLength && allInARow; i++) {
			// const xDiag = boardLength - 1 - i
			// const yDiag = i
			if (board[boardLength - 1 -i][i] !== marker) {
				allInARow = false
			}
		}
		return allInARow
	}
	function checkDownwardDiag(marker) {
		let allInARow = true
		for (let i = 0; i < boardLength && allInARow; i++) {
			if (board[i][i] !== marker) {
				allInARow = false
			}
		}
		return allInARow
	}


	/* return T/F if marker won*/
	function checkForWin (marker, position) {

		let didWin = false
		if (moveCounter >= boardLength * 2) {
			/* check horizontal */
			didWin = checkHorizontal(marker, position.x)

			/* check vertical */
			if (!didWin) {
				didWin = checkVertical(marker, position.y)
			}

			if (!didWin && isPositionOnUpwardDiag(position)) {
				didWin = checkUpwardDiag(marker, position)
			}

			if(!didWin && isPositionOnDownwardDiag(position)) {
				didWin = checkDownwardDiag(marker, position)
			}
		}
		return didWin
	}



	return (
		<p>some gameboard</p>

	)
}