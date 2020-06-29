import React, { Component, Children } from 'react';
class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed:true
        }
        this.onClick = this.onClick.bind(this)
    }
    onClick(){
        this.setState({
            isCollapsed:!this.state.isCollapsed
        })
    }
    render() {
        const {heading,children} = this.props;
        const {isCollapsed} = this.state;
        return (
            <div className = "Accordion">
              <h2 className = "Heading" onClick={this.onClick}>{heading}</h2>
              {!isCollapsed &&<div className = "Content">{children}</div>}
            </div>
        );
    }
}
export default Accordion;