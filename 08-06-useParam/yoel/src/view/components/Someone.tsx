import React from 'react'
import { useParams } from 'react-router-dom'
const Someone = () => {
    const params = useParams();
    console.log(params);
    const {someone} = params;
    
  return (
    <div> <h1>hii</h1>{someone}</div>
  )
}

export default Someone