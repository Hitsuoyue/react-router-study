import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class APP extends Component{
    render(){
        return(
            <div>Hello React!</div>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));