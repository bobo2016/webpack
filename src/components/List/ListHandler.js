import React, {Component} from "react"
import ReactDom, {render} from 'react-dom'




class ListHandler extends Component{
  constructor(){
    super();
    this.state = {
      type: 'Edit'
    }
  }

  changeType = (e) =>{
    
  }

  del = (e) => {

  }

  render(){
    return(
      <span className="btn-group">
        <button onClick={this.changeType}>{this.state.type}</button>
        <button onClick={this.del}>Remove</button>
      </span>
    )
  }

}


export default ListHandler
