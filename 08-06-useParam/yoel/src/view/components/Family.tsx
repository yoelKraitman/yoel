import React from 'react'
import { Link } from 'react-router-dom';

const Family = () => {
    const family = [
        {name:'papa' , age:50},
        {name:'mama' , age:40},
        {name:'yoni' , age:26},
        {name:'yair' , age:24},
        {name:'dani' , age:22},
        {name:'nonoios' , age:10}
    ]; 
  return (
    <div style={{display: 'flex' , flexDirection: 'column' , fontSize:'2rem' , background:'pink'}}>
        {family.map((someone) => {
            return <Link to = {someone.name}  key = {someone.name}>
                    {someone.name}
            </Link >
        })}
    </div>
  );
};

export default Family