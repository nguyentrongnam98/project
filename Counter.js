import React, { Component } from 'react';

class Counter extends Component {
    render() {
        console.log('Counter render')
        return (
            <div>
                 <button onClick = {this.decreate}>Giam</button>
                 <span>{this.state.count}</span>
                 <button onClick = {this.increate}>Tang</button>
            </div>
        );
    }
    componentDidMount(){
        console.log('Counter did mount')
    }
    componentDidUpdate(){
        console.log('Counter did update')
    }
    componentWillUnmount(){
        console.log('Couter Will Unmount')
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.count == nextState.count)
        {
            return false;
        }
        return true
    }
}

export default Counter;
