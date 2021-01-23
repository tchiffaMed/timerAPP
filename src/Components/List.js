import React, { Component } from 'react';
import Container from './Container'
import './List';
class List extends Component {
    renderContainer = () => {
        return this.props.timers.map((timer => {
            return ( <Container 
                        onFormSubmit={this.props.onFormSubmit}  
                        onDeleteForm={this.props.onDeleteForm}
                        onPlay={this.props.onPlay}
                        onPause={this.props.onPause}
                        key={timer.id} {...timer} 
                       
                    />
                )
        }))
    }

    render() {
        return(
            <div className="list">
                {this.renderContainer()}  
            </div>
        )
    }
    
}

export default List;