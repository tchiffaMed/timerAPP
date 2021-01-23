import React, { Component } from 'react';
import './montre.js'
import './Timer.css'


class Timer extends Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
      }
      componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
      }

    handlePlay=()=>{
        this.props.onPlay(this.props.id)
    }
    handlePause=()=>{
        this.props.onPause(this.props.id)
    }


    renderButton () {
        if(this.props.tourneDepuis){
            return <button onClick={this.handlePause}>Pause</button> 
        } else {return <button onClick={this.handlePlay}>Play</button> }
    } 
    render() {
        const elapsedString = window.montre.renderElapsedString(
            this.props.elapsed,
            this.props.tourneDepuis
        )
        return(
            <div className="timer">
                    <h2> {this.props.titre}</h2>
                    <p> {this.props.description} </p> 
                    <h2>{elapsedString}</h2>
                     <div>
                         <button onClick={() => this.props.onDeleteForm(this.props.id)}> Supprimer </button>                                                                                         
                         <button onClick={this.props.onEditFormOpen}>Modifier</button>
                    </div>
                      
                    {this.renderButton()}                                                                                      
            </div>
        )
    }
} 

export default Timer;