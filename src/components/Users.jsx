import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../redux/slice'


export const Users = () => {

  // Hooks
  // Ayuda a seleccionar el estado del user name
  const name = useSelector((state) => state.user.name);

  // Disptch 
  const dispatch = useDispatch();

  // Funcion
  const handleSetName = () => {
    const newName = prompt('Enter your name: ');
    dispatch(setName(newName));
  };


  return (
    <div>
      <h1>User: {name} </h1>
      <div>
        <button onClick={handleSetName}>Set name:</button>
      </div>
    </div>
  )
}
