import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpenseFilter from './ExpenseFilter'

const Expenses = ({expenses =[], onDeleteExpense}) => {

  const [selectedYear, setSelectedYear] = useState('All')

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value)
  };

  const filteredExpense = expenses.filter((expense) =>{
    const stringifiedyear = expense.date.getFullYear().toString()
    return stringifiedyear === selectedYear;
  });

  return (
    <div>
      <ExpenseFilter id='filter' value={selectedYear} onChange={yearChangeHandler}/>
      <ExpensesList expenses={filteredExpense} onDeleteExpense={onDeleteExpense}/>
    </div>
  )
}

export default Expenses
