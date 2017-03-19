import React, {Component} from "react"
import ReactDom, {render} from 'react-dom'


class BtnGroup extends Component{
  render(){
    return(
      <span>
        <button>Edit</button>
        <button>Delete</button>
      </span>
    )
  }
}




export default BtnGroup
