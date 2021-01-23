import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import List from './List';
import Action from './Action'
import './Box.css'




    
class Box extends Component {
            
        state = {
            timers : [
                {
                    title: "Aprendre CRUDs",
                    project: "React",
                    elapsed: 0,
                    id: "1245875-54452-54122",
                    tourneDepuis: null,
                }, 
        
                {
                    title: "Nouvelle",
                    project: "Angular",
                    elapsed: 0,
                    id: "1245875-54122-54192",
                    tourneDepuis: null,
                }
            ]
        }

        handleCreateTimer = ({ title, project }) => {
            const addnew = {
                    title,
                    project,
                    elapsed: 0,
                    tourneDepuis: null,
                    id: uuid()
                 }
            this.setState({
                    timers: [...this.state.timers, addnew]
             })
        
        }

        handleEditTimer = ({id, title, project }) => {
            this.setState({
                timers: this.state.timers.map(timer => {
                    if(timer.id === id) {
                        return {
                             ...timer , title, project, 
                            }
                    } return { ...timer }
                })
            })
        }

        handleDeleteTimer = (id) => {
            this.setState({
                timers: this.state.timers.filter(timer => timer.id !== id)
            })
            console.log('sup');
         }

        handlePlay = (id) =>{
            const now = Date.now();
            this.setState({
                timers: this.state.timers.map(timer => {
                    if(id === timer.id) {
                        return { ...timer, tourneDepuis:now }
                    }else { return { ...timer } }
                })
            })

        }

        handlePause = (id) =>{
            const now = Date.now();
            this.setState({
                timers: this.state.timers.map(timer => {
                    if(id === timer.id) {
                        const nextElapsed = now - timer.stourneDepuis;
                        return { ...timer, tourneDepuis:null,
                                elapsed: timer.elapsed + nextElapsed
                        }
                    }else { return { ...timer } }
                })
            })

        }

    render() {

        return(
            <div className="box">

                   <List 
                    onFormSubmit={this.handleEditTimer} 
                    onDeleteForm={this.handleDeleteTimer} 
                    timers={this.state.timers}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                 /> 

                 <Action onFormSubmit = {this.handleCreateTimer } />

            </div>
        )
    }
    
}

export default Box;