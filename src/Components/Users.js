import React, { useEffect } from 'react'

const Users = (props) => {

    useEffect(()=>{
        alert('I am useEffect due to props.data')
    },[props.data1])
  return (
    <div>
    <h1>My Name is {props.data1}</h1>
    <h1>Count is {props.data}</h1>
    
   
    </div>
  )
}

export default Users