import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operador ? 'operador ' : ''
    classes += props.double ? 'double ' : ''
    classes += props.equals ? 'equals ' : ''

    return (
        <button className={classes} onClick={e => props.click && props.click(props.value)}>{props.value}</button>
    )
}