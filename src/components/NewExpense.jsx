import React, { useState } from 'react'
import Form from './Form'
import Button from './UI/Button'
import './NewExpense.css'

const NewExpense = ({onAddNewExpense}) => {
  const [isShowForm, setIsShowForm] = useState(false)


  const showFormHandle = ()=>{
    setIsShowForm((prevExpense) => {
      return !prevExpense
    })
  }

  console.log('render');

  const closeFormHandler =() => setIsShowForm(false)





  return ( <div style={{backgroundColor: '#AD9BE9', padding: '20px', minWidth: '900px'}}>
    {isShowForm ? (
    <Form onAddNewExpense={onAddNewExpense} onCloseForm={closeFormHandler} />
  ) : (
    <Button onClick={showFormHandle}>Добавить новый расход</Button>
  )}
  </div>
  )
}

export default NewExpense
