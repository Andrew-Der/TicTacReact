import React from 'react'
import { Button } from 'react-bootstrap'
export function Box(props) {

	const {marker, onClick} = props
//minHeight, minWidth
//borders
	return (

		<Button style={{minHeight: "10px"}}onClick={onClick}>
			{marker === 1 && <i className="fa fa-times"></i>}
			{marker === 0 && <i className="fa fa-circle-o"></i>}
		</Button>
		)
}