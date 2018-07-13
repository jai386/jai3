import React from 'react';
import App2 from './app2';
export default class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName:"jai mangal"
    }
  }
  render(){
    return(
      <ul>
        <App2 details={this.state.firstName} />
      </ul>
      );
  }
}