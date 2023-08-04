import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

function ExpenseItem({id,name,cost}) {
  
  const { dispatch } = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type : 'DELETE_EXPENSE',
      payload : id
    })
  }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <div>
            <span className='badge bg-primary rounded-pill me-3 pt-2 pb-2'>
                ${cost}
            </span>
                <TiDelete size="1.3rem" onClick={handleDeleteExpense}></TiDelete>
        </div>
    </li>
  )
}

export default ExpenseItem