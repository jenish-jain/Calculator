import React, { Component } from "react";
import Button from "./Button";

class Keypad extends Component {

    getBtnName=(btnname)=>{
    // console.log(btnname);
    this.props.onClick(btnname);
    }

  render() {
    //   let button= this.props;
    return (
      <div>
        <Button name="7" getBtnName={this.getBtnName}></Button>
        <Button name="8" getBtnName={this.getBtnName}></Button>
        <Button name="9" getBtnName={this.getBtnName}></Button>
        <Button name="/" getBtnName={this.getBtnName}></Button>
        <br />
        <Button name="4" getBtnName={this.getBtnName}></Button>
        <Button name="5" getBtnName={this.getBtnName}></Button>
        <Button name="6" getBtnName={this.getBtnName}></Button>
        <Button name="*" getBtnName={this.getBtnName}></Button>
        <br />
        <Button name="1" getBtnName={this.getBtnName}></Button>
        <Button name="2" getBtnName={this.getBtnName}></Button>
        <Button name="3" getBtnName={this.getBtnName}></Button>
        <Button name="-" getBtnName={this.getBtnName}></Button>
        <br />
        <Button name="(" getBtnName={this.getBtnName}></Button>
        <Button name="0" getBtnName={this.getBtnName}></Button>
        <Button name=")" getBtnName={this.getBtnName}></Button>
        <Button name="+" getBtnName={this.getBtnName}></Button>
        <br />
        <Button name="=" getBtnName={this.getBtnName}></Button>
      </div>
    );
  }
}

export default Keypad;
