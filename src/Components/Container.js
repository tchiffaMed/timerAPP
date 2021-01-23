import React, { Component } from 'react';
import Timer from './Timer';
import Form from './Form';
import './Container.css'

class Container extends Component {

    state = {
        formOpen:false,
    }

    handleOnEditFormOpen = () => {
        this.setState({ formOpen : true,})
        console.log('clicked open form');
    }
    handleOnEditFormClose = () => {
        this.setState({ formOpen : false,})
        console.log('clicked open form');
    }
    onFormSubmit = ({id, title, project, }) => {
        this.handleOnEditFormClose()
        this.props.onFormSubmit({id, title, project}) 

    }



    render() {
        return(
            <div className="container">
                 {
                    this.state.formOpen ? (
                        <Form
                            title = { this.props.title }
                            project = { this.props.project }
                            id = { this.props.id }
                            onFormSubmit={this.onFormSubmit}
                            onCloseForm={this.handleOnEditFormClose}
                        /> ):
                        (<Timer 
                            titre = { this.props.title }
                            description =  { this.props.project }
                            id = { this.props.id }
                            elapsed = { this.props.elapsed }
                            tourneDepuis = { this.props.tourneDepuis }
                            onEditFormOpen={this.handleOnEditFormOpen}
                            onDeleteForm={this.props.onDeleteForm}
                            onPlay={this.props.onPlay}
                            onPause={this.props.onPause}
                        />)  
                 } 
            </div>
        )
    }
}

export default Container;