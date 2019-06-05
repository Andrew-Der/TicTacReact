import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Box } from './TicTacBox'
import { checkForWin } from './../lib/GameLogic'

/* Component with game variables & render logic */
export function GameBoard(){

	/* Hooks to hold state vars */
	const [winner, setWinner] = useState(null)
	const [numMoves, setNumMoves] = useState(1)
	const [boardLength, setBoardLength] = useState(3)
	const [board, setBoard] = useState(resetBoard())
	const [startingPlayer, setStartingPlayer] = useState(1)

	/* Reset the board to all empty 
	1 = X player, 0 = O player, null = empty */
	function resetBoard() {
		const newBoard = []
		for (let i = 0; i < boardLength; i++) {
			const newRow = []
			for (let j = 0; j < boardLength; j++) {
				newRow.push(null)
			}
			newBoard.push(newRow)
		}
		return newBoard
	}

	function getCurrPlayer() {
		/* initial and even turns */
		let currPlayer = startingPlayer
		/* odd turn */
		if (!(numMoves % 2)) {
			currPlayer = startingPlayer ? 0 : 1
		}
		return currPlayer
	}

	/* logic when box is clicked */
	function onBoxClick(xPos, yPos) {
		if (board[xPos][yPos] === null) {
			const currPlayer = getCurrPlayer()
			board[xPos][yPos] = currPlayer
			setBoard(board)
			const position = {x: xPos, y: yPos}
			setNumMoves(numMoves+1)
			if (checkForWin(numMoves, currPlayer, position, board)) {
				setWinner(currPlayer)
			}			
		}
	}

	function renderBoard() {
		const newBoard = []
		if (board.length < boardLength) return
		/* render 2D array of TicTacBoxes */
		for (let i = 0; i < boardLength; i++) {
			const newRow = []
			for (let j = 0; j < boardLength; j++) {
				newRow.push(
				<Col key={j}>
					<Box marker={board[i][j]} onClick={() => onBoxClick(i, j)}/>
				</Col>)
			}
			newBoard.push(<Row key={i} className="no-gutters">{newRow}</Row>)
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
		setWinner(null)
	}, [boardLength])

	return (
		<div className="DivCentered">
			<label>Tic Tac Toe board length</label>
			<input type="number" min="3" max="10" 
			placeholder={boardLength}
			onBlur={(event) => {
				setBoardLength(event.target.value)
			}}></input> 

			{renderBoard()}

			<Button onClick={() => {
				setWinner(null)
				setNumMoves(1)
				setBoard(resetBoard())
			}}>Reset</Button>
			{winner !== null &&
				<p>Congrats Player {winner}, nice win!</p>
			}
			{winner === null && numMoves === boardLength * boardLength + 1 &&
				<p>DRAW! Have another go!</p>
			}
		</div>
	)
}