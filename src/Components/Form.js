import React, { Component } from 'react';
import './Form.css'
class Form extends Component {

    state = {
        title: this.props.title || "",
        project: this.props.project || "",
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
        console.log(e.target.value);
    }

    handleProjectChange = e => {
        this.setState({ project: e.target.value });
        console.log(e.target.value);

    }

    handleClick = () => {
        const { title, project } = this.state;
        if(this.props.id) {
            //modifions
           const id = this.props.id;
            this.props.onFormSubmit({id, title, project})
           console.log('modifions');
        } else {
            //créons
            this.props.onFormSubmit({ title, project }) 
            console.log('créons');     
         }
    }

    render() {
        const submitText = this.props.title ? "Modifier":"Créer";
        return(
            <div className="form">

                <label for="titre">Titre</label>
                <input type="text" className="input" name="titre"
                value={this.state.title}
                onChange={this.handleTitleChange} required/>
                
                <label for="description">Description</label>                 
                <input type="text" className="input" name="description"
                value={this.state.project}
                onChange={this.handleProjectChange} required/>

                <button onClick={this.handleClick}>
                    { submitText }
                </button>
                <button>Annuler</button>
                 
            </div>
        )
    }
}

export default Form;