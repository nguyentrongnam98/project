import React, { Component } from 'react';

class Reset extends Component {
    Reset=(value)=>{
        this.props.onResetDefault(value)
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-danger" onClick = {this.Reset}>Reset</button>
            </div>
        );
    }
}

export default Reset;
