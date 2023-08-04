import React, { useState , useContext } from "react";
import { AppContext } from "../context/AppContext";
import { nanoid } from 'nanoid'

function AddExpenseForm() {
  const { dispatch } = useContext(AppContext)
  const [name,setName] = useState('')
  const [cost,setCost] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const expense = {
      id: nanoid(),
      name: name,
      cost: parseInt(cost)
    } 

    dispatch({
      type:'ADD_EXPENSE',
      payload :expense
    })
    setName('')
    setCost('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">cost:</label>
          <input
            type="number"
            minLength={1}
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e)=>setCost(e.target.value)}
            required
          ></input>
        </div>
      </div>
      <div className="mt-3">
        <button type="submit" className="btn btn-primary pe-5 ps-5">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddExpenseForm;
