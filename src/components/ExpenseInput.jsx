import React from 'react'
import Input from './UI/Input'

const ExpenseInput = ({title, value, onChange, className, id, label, type, ...rest}) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <br></br>
      <Input className={className} value={value} id={id} type={type} onChange={onChange} {...rest}/>
    </div>
  )
}

export default ExpenseInput

