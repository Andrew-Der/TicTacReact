import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { Box } from './TicTacBox'
import { checkForWin } from './../lib/GameLogic'
/* Component with game variables & logic*/
export function GameBoard(){

	const [boardLength, setBoardLength] = useState(3)
	const [board, setBoard] = useState(resetBoard())
	const [winner, setWinner] = useState(null)
	const [numMoves, setNumMoves] = useState(1)
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
		//2,4,6
		if (!(numMoves % 2)) {
			currPlayer = startingPlayer ? 0 : 1
		}
		return currPlayer
	}

	function renderBoard() {
		const newBoard = []
		if (board.length < boardLength) {
			return
		}
		for (let i = 0; i < boardLength; i++) {
			const newRow = []
			for (let j = 0; j < boardLength; j++) {
				newRow.push(
					<Col>
						<Box marker={board[i][j]} onClick={
							() => {
								if (board[i][j] === null) {
									board[i][j] = getCurrPlayer()
									setBoard(board)
									const position = {x: i, y: j}
									const player = getCurrPlayer()
									setNumMoves(numMoves+1)
									console.log("clicked")
									console.log(numMoves)
									if (checkForWin(numMoves, player, position, board)) {
										setWinner(player)
									}
									
								}
							}
						}/>
					</Col>)
			}
			newBoard.push(
				<Row>{newRow}</Row>)
		}
		return (
			<Container>
			{newBoard}
			</Container>)
	}

	/* after board length is changed */
	useEffect(()=> {
		setBoard(resetBoard())
		setNumMoves(1)
	}, [boardLength])

	return (
		<div>
		<p>some gameboard</p>
			<Button onClick={() => setWinner(0)}>Winner</Button>
			<input type="number" min="3" 
			placeholder={boardLength}
			onBlur={(event) => {
				setBoardLength(event.target.value)
			}}></input> 

			<div>
			{numMoves}
			{JSON.stringify(board)}
			{renderBoard()}
			</div>
			<Button onClick={() => {
				setWinner(null)
				setNumMoves(1)
				setBoard(resetBoard())
			}}>Reset</Button>
			{winner !== null &&
				<p>Congrats Player {winner}, nice win!</p>
			}
		</div>
	)
}