import React from 'react'

export function Box(props) {
	const {marker, onClick} = props
	/* ShoutOut : Icons from FontAwesome! */
	const icon = marker ? "fa fa-times fa-2x" : "fa fa-circle-o fa-2x"
	return (
		<div className="BoxBackground" onClick={onClick}>
		{marker !== null && 
			<div className="BoxForegroundIcon">
				<i className={icon}/>
			</div>}
		</div>)
}