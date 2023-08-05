import React from 'react'

function Event() {
    function eventHandler(){
        alert('Darshan');
    }
  return (
    <div>
        <h1>React JS</h1>
        <button onClick={eventHandler}>Click</button>
        {/* <button onClick={() => this.eventHandler()}>Click</button> */}
        {/* <button onClick={this.eventHandler.bind(this)}>Click</button> */}
    </div>
  )
}

export default Event