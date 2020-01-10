import React ,{Component} from 'react';

class Button extends Component{

    button = ()=>{
        this.props.getBtnName(this.props.name)
    }

    render(){
        let {name} = this.props;
        return(
            <button className="roundButton" onClick={this.button}>
                {name}
            </button>
        );
    }
}


export default Button;