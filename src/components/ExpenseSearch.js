import React, { useState,useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

function ExpenseSearch () {
    const { expenses } = useContext(AppContext)
    const [search,setSearch] = useState('')

    const filteredExpenses = expenses.filter(expense => {
        return expense.name.toLowerCase().includes(search.toLowerCase());
      });
    
  return (
    <>
      <div class='input-group'>
        <input
          type='search'
          class='form-control rounded'
          placeholder='Search for a expense...'
          aria-label='Search'
          aria-describedby='search-addon'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='button' class='btn btn-outline-primary'>
          search
        </button>
      </div>
      <ul className='list-group mt-3 mb-3'>
        {filteredExpenses.map(expense => {
          return (
            <ExpenseItem
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          )
        })}
      </ul>
    </>
  )
}

export default ExpenseSearch
