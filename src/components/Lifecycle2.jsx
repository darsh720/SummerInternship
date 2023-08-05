import React, { Component } from 'react'

class Lifecycle2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = { 
         name:'InnoBrain'
      }
      console.log('Lifecycle A Constructor from Constructor')

    }
    static getDerivedStateFromProps(props,status)
    {
    console.log("Lifcycle B method from getDerivedStateFromProp")
    return null
    }
    componentDidMount()
    {
      // setTimeout(() => {
      //   this.setState({ name: 'InnoBrain' });
      // }, 2000);
      console.log("Lifecycle B from componentDidMount")
    
    }
    shouldComponentUpdate()
    {
      console.log("Lifecycle B from shouldComponentUpdate Method")
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
      console.log('Lifecycle B from getSnDpeshotBeforeUpdate')
      return null
    }
    componentDidUpdate()
    {
      console.log('Lifecycle Bfrom componentDidUpdate')
    }
    render() {
      console.log("Lifecycle B Method from render method ")
    return (
      <div>
        <h2> Lifecycle B from render method</h2>
      </div>
    )
  }
}

export default Lifecycle2
