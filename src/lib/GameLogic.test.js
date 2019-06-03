import { checkForWin } from './GameLogic'

it('check for horizontal win', () => {
	const board = [
		[0, 0, 0],
		[1, 1, 1],
		[1, 1, 1]
	]
	expect(checkForWin(9, 0, {x: 0, y: 2}, board)).toEqual(true)
})
it('check for horizontal non-win', () => {
	const board = [
		[0, 0, 1],
		[1, 1, 1],
		[1, 1, 1]
	]
	expect(checkForWin(9, 0, {x: 0, y: 2}, board)).toEqual(false)
})
it('check for vertical win', () => {
	const board = [
		[0, 1, 0],
		[1, 1, 0],
		[1, 1, 0]
	]
	expect(checkForWin(9, 0, {x: 0, y: 2}, board)).toEqual(true)
})
it('check for vertical non-win', () => {
	const board = [
		[1, 0, 0],
		[1, 1, 1],
		[1, 1, 1]
	]
	expect(checkForWin(9, 0, {x: 0, y: 2}, board)).toEqual(false)
})
it('check for upward diag win', () => {
	const board = [
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 1]
	]
	expect(checkForWin(9, 1, {x: 1, y: 1}, board)).toEqual(true)
})
it('check for upward diag non-win', () => {
	const board = [
		[0, 0, 0],
		[0, 1, 0],
		[1, 0, 1]
	]
	expect(checkForWin(9, 1, {x: 1, y: 1}, board)).toEqual(false)
})
it('check for downward diag non-win', () => {
	const board = [
		[1, 0, 0],
		[0, 1, 0],
		[1, 0, 1]
	]
	expect(checkForWin(9, 1, {x: 2, y: 2}, board)).toEqual(true)
})
it('check for downward diag non-win', () => {
	const board = [
		[0, 0, 0],
		[0, 1, 0],
		[1, 0, 1]
	]
	expect(checkForWin(9, 1, {x: 1, y: 1}, board)).toEqual(false)
})