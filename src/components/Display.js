import React ,{Component} from 'react';

class Display extends Component{
    
    render(){
        let {result,expression} = this.props;
        return(
            <div className="display">
                 <p>result = {result}</p>
                 <p>expression ={expression}</p>
            </div>
        );
    }
}

export default Display;
