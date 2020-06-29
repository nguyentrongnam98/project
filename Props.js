import React, { Component } from 'react';

class Props extends Component {
    constructor(props){
        super(props)
        this.state = {
            isDone: true
        };
       
    }
    onClick  =()=>{
        this.setState({
            isDone:!this.state.isDone
        })
    }
    render() {
        const {heading,content} = this.props
        const {isDone} = this.state;
        return (
            <div> 
                <div className = "Heading" onClick = {this.onClick}><h2>{heading}</h2></div>
                {!isDone && <div className = "Content">{this.props.children}</div>}   
            </div>
        );
    }
}

export default Props;
