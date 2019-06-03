import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

/* Component with game variables & logic*/
export function GameBoard(){

	const [boardLength, setBoardLength] = useState(3)
	const [board, setBoard] = useState(resetBoard())
	const [winner, setWinner] = useState(null)
	const [numMoves, setNumMoves] = useState(0)
	const [startingPlayer, setStartingPlayer] = useState(1)

	function resetBoard() {
		const newBoard = new Array()
		for (let i = 0; i < boardLength; i++) {
			const newRow = new Array()
			for (let j = 0; j < boardLength; j++) {
				newRow.push(null)
			}
			newBoard.push(newRow)
		}
		return newBoard
	}

	function getCurrPlayer() {
		let currPlayer = startingPlayer
		/* odd turn */
		if (numMoves % 2 !== 0) {
			currPlayer = startingPlayer ? 0 : 1
		}
		return currPlayer
	}
	/* after board length is changed */
	useEffect(()=> {
		setNumMoves(0)
		setBoard(resetBoard())
	}, [boardLength])

	return (
		<div>
		<p>some gameboard</p>
			<Button onClick={() => setWinner(0)}>Winner</Button>
			<input type="number" min="3" 
			placeHolder={boardLength}
			onBlur={(event) => {
				setBoardLength(event.target.value)
			}}></input> 

			<div>
			{JSON.stringify(board)}
			</div>
			<Button onClick={() => {
				setWinner(null)
				setNumMoves(0)
				resetBoard()
			}}>Reset</Button>
			{winner !== null &&
				<p>Congrats Player {winner}, nice win!</p>
			}
		</div>
	)
}