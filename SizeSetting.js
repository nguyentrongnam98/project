import React, { Component } from 'react';

class SizeSetting extends Component {
 changeSize=(value)=>{
  this.props.onChangeSize(value)
 }
    render() {
        return (
            <div className="panel panel-primary">
               <div className="panel-heading">
                   <h3 className="panel-title">Size : {this.props.fontSize} Px</h3>
               </div>
               <div className="panel-body">
                 <button type="button" className="btn btn-success" onClick = {()=>this.changeSize(-1)}>Giam</button>&nbsp;
                 <button type="button" className="btn btn-success" onClick = {()=>this.changeSize(1)}>Tang</button>                
               </div>
               </div>
        );
    }
}

export default SizeSetting;
