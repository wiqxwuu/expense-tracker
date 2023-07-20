import React from 'react'
import './Input.css'

const Input = ({type,value,onChange ,...rest}) => {
  return (
    <div>
          <input {...rest} value={value} onChange={onChange} type={type}></input>
    </div>
  )
}

export default Input
