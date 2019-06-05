function checkHorizontalForWin(marker, xPosition, board) {
	let allInARow = true
	for(let i = 0; i < board.length && allInARow; i++) {
		if (board[xPosition][i] !== marker) {
			allInARow = false
		}
	}
	return allInARow
}

function checkVerticalForWin(marker, yPosition, board) {
	let allInARow = true
	for(let i = 0; i < board.length && allInARow; i++) {
		if (board[i][yPosition] !== marker) {
			allInARow = false
		}
	}
	return allInARow
}

function isPositionOnUpwardDiag(position, board) {
	return (position.x + position.y === board.length - 1)
}

function isPositionOnDownwardDiag(position, board) {
	return (position.x === position.y)
}

function checkUpwardDiagForWin(marker, board) {
	let allInARow = true
	for (let i = 0; i < board.length && allInARow; i++) {
		if (board[board.length - 1 -i][i] !== marker) {
			allInARow = false
		}
	}
	return allInARow
}

function checkDownwardDiagForWin(marker, board) {
	let allInARow = true
	for (let i = 0; i < board.length && allInARow; i++) {
		if (board[i][i] !== marker) {
			allInARow = false
		}
	}
	return allInARow
}
/* return T/F if marker in position won*/
export function checkForWin (moveCounter, marker, position, board) {
	let didWin = false
	if (moveCounter >= board.length * 2 - 1) {
		/* check horizontal */
		didWin = checkHorizontalForWin(marker, position.x, board)
		/* check vertical */
		if (!didWin) {
			didWin = checkVerticalForWin(marker, position.y, board)
		}
		/* check upwardDiag (forwardslash) */
		if (!didWin && isPositionOnUpwardDiag(position, board)) {
			didWin = checkUpwardDiagForWin(marker, board)
		}
		/* check downwardDiag (backwardslash) */
		if(!didWin && isPositionOnDownwardDiag(position, board)) {
			didWin = checkDownwardDiagForWin(marker, board)
		}
	}
	return didWin
}