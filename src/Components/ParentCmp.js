import React from 'react'
import ChildCmp from './ChildCmp';


class ParentCmp extends React.Component {
    constructor(){
        super()
        this.state = {
            show: true
        }
    }

    

    render(){

    
  return (
      <div> 
      <h1>Child Component will unmount
      </h1>
      {this.state.show ? <ChildCmp /> : null}
      <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child Component</button>
      </div>
  )
    }
}

export default ParentCmp;


// password 