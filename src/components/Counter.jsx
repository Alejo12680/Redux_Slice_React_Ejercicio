import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incremet, decrement } from '../redux/slice'


export const Counter = () => {

  // Hooks
  // Ayuda a seleccionar el estado del contador
  const count = useSelector((state) => state.counter)

  // Disptch 
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Counter: {count} </h1>
      <div>
        <div>
          <button onClick={() => dispatch(incremet())}> Incrementar </button>
        </div>

        <div>
          <button onClick={() => dispatch(decrement())}> Decrementar </button>
        </div>

      </div>
    </div>
  )
}
