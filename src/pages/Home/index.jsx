import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Home = () => {

  const [name, setName] = useState(Cookies.get('name')?Cookies.get('name'): "")


  const newName = (e) =>{
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
    Cookies.set("name", e.target.value, {
      sameSite:'none',
      secure: true
    })
  }

  const deleteCookie = () =>{
    Cookies.remove("name", {
      sameSite:'none',
      secure: true
    })
  }

  return(
    <>
      <p>Page Home</p>
      <p>{name}</p>
      <input type='text' onChange={newName}></input>
      <button onClick={deleteCookie}>clear</button>
    </>
  )
}

export default Home;