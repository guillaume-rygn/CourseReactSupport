import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { login } from '../../stores/action';

const Counter = () => {

  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  return(
    <>
      <Link to="/counter/dzdkzpdkzpdkpz">About</Link>
      <p>Page Counter</p>
      <input type="text" onChange={(e) => {dispatch(login(e.target.value,2))}}></input>
      <p>{name}</p>
    </>
  )
}

export default Counter;