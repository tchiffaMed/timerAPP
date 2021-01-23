import React, { Component } from 'react';
import './Button.css'


class Button extends Component {
    render() {
        return(
            <div className="btn">
               <button onClick={this.props.handleFormOpen}> + </button> 
            </div>
        )
    }
}

export default Button;