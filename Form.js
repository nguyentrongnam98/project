import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName : '',
            passWord:'',
            gender:0,
            Describe:'',
            language:'English'
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(event){
     
     //let name =event.target.name;
     var value =event.target.value;
     this.setState({
         userName:value,
         passWord:value,
         Describe:value,
         language:value
     })
    }
    onSubmit=(event)=>{
          event.preventDefault()
          console.log(this.state)
    }
    render() {
        return (
          
          <div className="container">
              <div className="row">
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                      <div className="panel panel-primary">
                            <div className="panel-heading">
                                  <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                            <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                    <label >UserName</label>
                                    <input type="text" className="form-control" onChange = {this.onChange} name="txtName" value={this.state.userName}/>
                                    </div>
                                    <div className="form-group">
                                    <label >Password</label>
                                    <input type="Password" className="form-control" onChange = {this.onChange} name="txtPassWord" value={this.state.passWord}/>
                                    </div>
                                    <div className="form-group">
                                    <label >Mô tả</label>
                                    <textarea onChange = {this.onChange} row="30" value={this.state.Describe}></textarea>
                                    </div>
                                    <label>Giới tính</label>
                                    <select  className="form-control" name="gender" value = {this.state.gender} onChange={this.onChange}>
                                        <option value ={0}  >Nam</option>
                                        <option value ={1} >Nữ</option>
                                    </select>
                                    <label>Ngôn ngữ</label>
                                    <div className="radio">
                                            <label>
                                            <input type="radio" name="language" value="VN" onChange = {this.onChange} checked={this.state.language === 'VN'}/>
                                            Tiếng Việt
                                            </label>
                                            <label>
                                            <input type="radio" name="language" value="English" onChange = {this.onChange} checked={this.state.language === 'English'}/>
                                            Tiếng Anh
                                            </label>
                                        </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="reset" className="btn btn-danger">Reset</button>
                                </form>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
        );
        
        
        
        
        
    }
}

export default Form;
