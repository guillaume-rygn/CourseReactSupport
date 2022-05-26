import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {

  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(
    () =>{
      window.setInterval(() => {
        setCount(count => count - 1)
      },1000)
      if(count === 0){
        return navigate('/')
      }
    },[count === 0]
  )

  return(
    <>
      <p>Tu ne trouveras rien ici</p>
      <p>{count}</p>
    </>
  )
}

export default Notfound;