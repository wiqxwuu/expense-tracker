import './App.css';
import NewExpense from './components/NewExpense';
import Expenses from './components/expenses/Expenses';
import { useState } from 'react';

const EXPENSES = [
  {
    id: 'e1',
    title: 'Food',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e2',
    title: 'Play Station 5',
    amount: 799.69,
    date: new Date(2023, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2022, 5, 12),
  }
]

function App() {
  const [expenses, setExpenses] = useState(EXPENSES)
  const addNewExpenseHandler = (newExpense = {}) => {
    setExpenses((prevExpenses)=> 
       [...prevExpenses, newExpense]
    )
  }

  const deleteExpenseByIdHandler = (id) => {
    const filteredExpenses = expenses.filter(expense=> expense.id !==id)
    setExpenses(filteredExpenses)
  }

  return (
    <div className="App">
      <NewExpense onAddNewExpense={addNewExpenseHandler}r/>
      <div className='expenses_container'>
      <Expenses expenses={expenses} onDeleteExpense={deleteExpenseByIdHandler}/>
      </div>
    </div>
  );
}

export default App;
