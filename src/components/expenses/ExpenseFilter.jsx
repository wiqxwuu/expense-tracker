import React from 'react'
import './ExpenseFilter.css'

const ExpensesFilter = ({id, onChange, value}) => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor={id}>Filter by year</label>
        <select onChange={onChange} id={id} value={value}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="All">All</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter