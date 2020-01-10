import React ,{Component} from 'react';

class Display extends Component{
    
    render(){
        let {result,expression} = this.props;
        return(
            <div className="display">
                 <p className="result"> {result}</p>
                 <p className="expression">{expression}</p>
            </div>
        );
    }
}

export default Display;
