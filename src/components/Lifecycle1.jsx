import React, { Component } from 'react'
//import LifecycleB from './components/LifecycleB'
import Lifecycle2 from './Lifecycle2'
class Lifecycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = { 
         name:'InnoBrain'
      }
      console.log('Lifecycle A Constructor from Constructor')

    }
    static getDerivedStateFromProps(props,status)
    {
    console.log("Lifcycle A method from getDerivedStateFromProp")
    return null
    }
    componentDidMount()
    {
      setTimeout(() => {
        this.setState({ name: 'InnoBrain' });
      }, 2000);
      console.log("Lifecycle A from componentDidMount")
    
    }
    shouldComponentUpdate()
    {
      console.log("Lifecycle A from shouldComponentUpdate Method")
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
      console.log('Lifecycle A from getSnapeshotBeforeUpdate')
      return null
    }
    componentDidUpdate()
    {
      console.log('Lifecycle A from componentDidUpdate')
    }
    changeState =() =>
    {
      this.setState({
        name:'Coding'
      })
    }
    render() {
      console.log("Lifecycle A Method from render method ")
    return (
      <div>
        <h2> Lifecycle A from render method</h2>
        <h2>{this.state.name}</h2>
        <button onClick={this.changeState}>change state</button>
          {/* <Lifecycle2/> */}

      </div>
    )
  }
}

export default Lifecycle1
