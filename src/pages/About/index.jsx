import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context';

const About = () => {

  const {name, setName} = useContext(AppContext)
  const url = useParams();
  console.log(url)

  return(
    <>
      <p>{url.about}</p>
      <p>{name}</p>
      <input type='text' onChange={(e) => setName(e.target.value)}/>
    </>
  )
}

export default About;