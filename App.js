import React, { Component } from 'react';
import ColorPicker from './Component/ColorPicker'
import Reset from './Component/Reset'
import SizeSetting from './Component/SizeSetting'
import Result from './Component/Result'
import Form from './Component/Form'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: 'red',
      fontsize:12
    }
  }
  onSetColor=(item)=>{
    // tham số param là color truyền từ props bên component ColorPicker
     this.setState({
       color:item
     })
  }
  onChangeSize=(value)=>{
    if(this.state.fontsize + value > 8 && this.state.fontsize + value <36 ){
      this.setState({
        fontsize:this.state.fontsize + value
      })
    }else{
      this.setState({
        fontsize:this.state.fontsize - value
      })
    }
  }
  onResetDefault=(value)=>{
    if(value){
      this.setState({
        color: 'red',
        fontsize:12
      })
    }
  }
  render(){
  return (
    <div className="container a">
       
       <div className="row">
         
         <ColorPicker color={this.state.color} onReceColor = {this.onSetColor}/>
         
           <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting fontSize = {this.state.fontsize} onChangeSize = {this.onChangeSize}/>
              <Reset onResetDefault = {this.onResetDefault}/>
               </div>
           </div>
         <Result color = {this.state.color} fontSize12={this.state.fontsize}/>
        <div className = "form">
          <Form/>
        </div>
         </div>
      
  );
}
}

export default App;
