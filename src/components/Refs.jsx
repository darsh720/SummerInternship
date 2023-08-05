import React, { Component } from 'react'

class Refs extends Component {
    
    constructor(props) {
      super(props)
        
        // this.inputref=React.createRef()
        this.cbRef=null
        this.setCBRef=element=>
        {
            this.cbRef=element
        }
    
    }
    componentDidMount()
    {
        if(this.cbRef)
            this.cbRef.focus()
        //  this.inputref.current.focus()
        // console.log(this.inputref)
    }
    clickHandler = () =>{
        // alert(this.inputref.current.value)
        alert(this.cbRef.value)
    }
    render() {
    return (
      <div>
        {/* <input type="text" ref={this.inputref}/> */}
        <input type="text" name="t1" ref={this.setCBRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Refs
