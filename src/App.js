import React, { Component } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state={
      result:" ",
      expression: " "
    }
  }
  
  evaluate=(clickedBtn)=>{
    // console.log(this.event.target);
    if(clickedBtn === "="){
      this.setState({result:eval(this.state.expression)})
      // if(this.state.result !=" "){
      //   this.setState({expression:this.state.result});
      // }
    }else if((clickedBtn === "CLR")){
      this.setState({expression:" ", result:" "});
    }else if((clickedBtn === "DEL")){
      this.setState({expression:this.state.expression.slice(0,-1)});
    }
      else{
      this.setState({expression:this.state.expression + clickedBtn});
    }
    // console.log(clcikedBtn);
  }

  render(){
    return (
      <div className="container">
          <h1>React calculator</h1>
        <div className="calculator-body">
          <Display expression={this.state.expression} result={this.state.result}></Display>
          <Keypad onClick={this.evaluate}></Keypad>
        </div>

      </div>
    )
  }
}

export default App;
