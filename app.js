import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './src/Basic';

class APP extends Component{
    render(){
        return(
            <BasicExample/>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));