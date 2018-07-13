import React from 'react'
export default class App2 extends React.Component {
  
  render(){
    return(
      <ul>
        <h2>Hello</h2><p> Hello {this.props.details}</p>
      </ul>
      )
  }
}