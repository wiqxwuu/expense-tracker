import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({expenses = [], onDeleteExpense}) => {
    console.log(expenses);

  if(expenses.length === 0){
    return <h1 className='expenses_text'>No Expenses</h1>
  }

  return (
    <ul>
        {expenses.map((expense,i)=>{
            return <ExpenseItem onDeleteExpense={onDeleteExpense} key={i} {...expense}/>
})}
    </ul>
  )
}

export default ExpensesList
