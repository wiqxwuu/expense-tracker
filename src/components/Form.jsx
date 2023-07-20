import React, { useState } from 'react'
import Button from './UI/Button'
import ExpenseInput from './ExpenseInput'
import './Form.css'

const Form = ({onCloseForm, onAddNewExpense}) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const isFormValid = 
  title.trim().length !== 0 && 
  amount.trim().length !== 0 && 
  date.trim().length !== 0 

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if(isFormValid) {
      const expense = {
        date: new Date(date),
        title,
        amount: Number(amount),
        id: Date.now().toString()
      }
      onAddNewExpense(expense)

      setTitle('')
      setAmount('')
      setDate('')
    }else{
      alert('Заполните все поля!')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='input_container'>
      <ExpenseInput className='inputs' onChange={titleChangeHandler} value={title}  type='text' title='Заголовок' id='input_text'/>
      <ExpenseInput className='inputs' onChange={amountChangeHandler} value={amount} type='number' title='Количество' id='input_amount'/>
      </div>
      <ExpenseInput className='inputs' onChange={dateChangeHandler} value={date} type='date' title='Датировать' id='input_date'/>
      <div className='button_block'>      
      <Button type='button' onClick={onCloseForm}>Отмена</Button>
      <Button disabled={!isFormValid} type='submit'>Добавить расход</Button>
      </div>
    </form>
  )
}

export default Form
