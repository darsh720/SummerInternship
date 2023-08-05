import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) 
    {
      super(props)
    
      this.state = {
         fname:'',
         mname:'',
         lname:''
      }
    }
    changefname=event=>{
        this.setState({
            fname:event.target.value
        })
    }
    changemname=event=>{
        this.setState({
            mname:event.target.value
        })
    }
    changelname=event=>{
        this.setState({
            lname:event.target.value
        })
    }
    onsubmit=event=>{
        alert(`${this.state.fname}, ${this.state.mname}, ${this.state.lname} `)
    }
  render() {
    return (
        <form onsubmit={this.onsubmit}>
            <div>
                <label>First Name</label>
                <input type="text" value={this.state.fname} onChange={this.changefname}/>
            </div>

            <div>
                <label>Middel Name</label>
                <input type="text" value={this.state.mname} onChange={this.changemname}/>
            </div>

            <div>
                <label>Last Name</label>
                <input type="text" value={this.state.lname} onChange={this.changelname}/>
            </div>

            <div>
                <button onClick={this.onsubmit}>Sumbit</button>
            </div>
        </form>
    )
  }
}

export default Form