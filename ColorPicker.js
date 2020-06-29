import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            colors :['red','green','blue','orange']
        }
    }
    showColor = (item)=>{
        return {
            backgroundColor:item
        }
    }
    setAciveColor = (item)=>{
        // onReceColor được truyền từ Component App sang
        // onReceColor nó chứa 1 hàm là hàm onSetcolor bên component App
        // ở đây truyền tham số item vào để chuyển sang hàm bên kia
       this.props.onReceColor(item)
    }
    render() {
        var elementColor = this.state.colors.map((item,index)=>{
            return <span 
            key={index} 
            style = {this.showColor(item)}
            // this.props.color được truyền qua component App.js
            // Ở đây nếu this.props.color === item thì add class active
            //
            className = {this.props.color === item ? 'active': ''}
            onClick = {()=>this.setAciveColor(item)}
            ></span>
        })
        return (
        
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <div className="panel panel-primary">
               <div className="panel-heading">
                 <h3 className="panel-title">ColorPicker</h3>
               </div>
               <div className="panel-body">
                   {elementColor}
                 <hr></hr>
               </div>
               </div>
           </div>
        );
    }
}

export default ColorPicker;
