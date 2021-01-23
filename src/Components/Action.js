import React, { Component } from 'react';
import Form from './Form'
import Button from './Button'
import './Action.css'


class Action extends Component {

    state = {
        formOpen: false,
    }

    handleFormOpen = () =>{
        this.setState({formOpen: true})
    }

    handleFormClose = () => {
        this.setState({formOpen: false})
    }
    onFormSubmit = ({title, project, }) => {
          this.handleFormClose()
          this.props.onFormSubmit({title, project})  
    }


    render() {
        if(this.state.formOpen) {
            return (<Form 
                onFormSubmit={this.onFormSubmit} 
                onCloseForm={this.handleFormClose}  />)
        } else {
                return <Button handleFormOpen={this.handleFormOpen}/>
            }
    } 
}

export default Action;