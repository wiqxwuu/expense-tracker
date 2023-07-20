import React from 'react'
import './ExpenseItem.css'
import Card from '../cards/Card'
import ExpenseDate from './ExpenseDate'
import Button from '../UI/Button'
import { useState } from 'react'
import Modal from '../UI/Modal'

const ExpenseItem = ({date, title, amount, onDeleteExpense, id}) => {

    const [isModalVisable, setIsModalVisable] = useState(false)

    return <Card>
        <li>
        <div className='block'>
        <ExpenseDate date={date} /> 
        <h2 style={{marginLeft: '1rem'}} className='title_item'>{title}</h2>
        </div>
        <div className='block'>    
            <div className='amount_item'>${amount}</div>
            <Button style={{marginLeft: '1rem', marginRight: '10px'}} onClick={()=>[
                onDeleteExpense(id)
                
            ]}>Delete</Button></div>
</li>
    </Card>
    {isModalVisable? <Modal /> : null}
}

export default ExpenseItem
