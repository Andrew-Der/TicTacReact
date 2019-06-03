export function checkHorizontal(marker, xPosition, board) {
	let allInARow = true
	for(let i = 0; i < board.length && allInARow; i++) {
		if (board[xPosition][i] !== marker) {
			allInARow = false
		}
	}
	return allInARow
}
export function checkVertical(marker, yPosition, board) {
	let allInARow = true
	//console.log(marker)
	//console.log(board)
	for(let i = 0; i < board.length && allInARow; i++) {
		//console.log(marker + yPosition)
		// console.log(board[i][yPosition])
		// console.log(i + " " + yPosition)

		if (board[i][yPosition] !== marker) {
			allInARow = false
		}
	}
	return allInARow
}
export function isPositionOnUpwardDiag(position, board) {
	return (position.x + position.y === board.length - 1)
}
export function isPositionOnDownwardDiag(position, board) {
	return (position.x === position.y)
}
export function checkUpwardDiag(marker, board) {
	let allInARow = true
	for (let i = 0; i < board.length && allInARow; i++) {
		// const xDiag = boardLength - 1 - i
		// const yDiag = i
		if (board[board.length - 1 -i][i] !== marker) {
			allInARow = false
		}
	}
	return allInARow
}
export function checkDownwardDiag(marker, board) {
	let allInARow = true
	for (let i = 0; i < board.length && allInARow; i++) {
		if (board[i][i] !== marker) {
			allInARow = false
		}
	}
	return allInARow
}

/* return T/F if marker won*/
export function checkForWin (moveCounter, marker, position, board) {

	let didWin = false
	if (moveCounter >= board.length * 2 - 1) {
		/* check horizontal */
		didWin = checkHorizontal(marker, position.x, board)
		console.log("horizontal? " + didWin)

		/* check vertical */
		if (!didWin) {
			didWin = checkVertical(marker, position.y, board)
			console.log("Vertical? " + didWin)
		}

		if (!didWin && isPositionOnUpwardDiag(position, board)) {
			didWin = checkUpwardDiag(marker, board)
			console.log("Upward Diag? " + didWin)

		}

		if(!didWin && isPositionOnDownwardDiag(position, board)) {
			didWin = checkDownwardDiag(marker, board)
			console.log("DownwardDiag Diag? " + didWin)

		}
	}
	return didWin
}