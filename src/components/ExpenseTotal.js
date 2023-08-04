import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function ExpenseTotal() {
  const { expenses } = useContext(AppContext)

  const totalExpenses = expenses.reduce((total,item)=>{
    return total += item.cost
  },0)

  return (
    <div className='alert alert-primary'>
        Spent so far: ${totalExpenses}
    </div>
  )
}

export default ExpenseTotal