import React, { Component } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state={
      expression: " "
    }
  }

  appendExpression=(clickedBtn)=>{
    // console.log(this.event.target);
    // console.log(clcikedBtn);
    this.setState({expression: this.state.expression+ clickedBtn});
  }

  render(){
    return (
      <div className="container">
          <h1>React calculator</h1>
        <div className="calculator-body">
          {/* {this.state.expression} */}
          <Display result={this.state.expression}></Display>
          <Keypad onClick={this.appendExpression}></Keypad>
        </div>

      </div>
    )
  }
}

export default App;
