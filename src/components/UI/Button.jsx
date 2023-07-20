import React from 'react'
import './Button.css'

const Button = ({onClick, disabled, children, type, ...rest}) => {
  return (
    <button disabled={disabled} type={type} {...rest} onClick={onClick}>{children}</button>
  )
}

export default Button
