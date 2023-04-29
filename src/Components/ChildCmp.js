import React from 'react'

class ChildCmp extends React.Component   {


    componentWillUnmount(){

       console.log("My Component is unmounted")
        
    }

    render(){
  return (
    <div> I am ChildCmp </div>
  )
    }
}

export default ChildCmp