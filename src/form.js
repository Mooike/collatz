import React, { Component } from 'react';
import './form.css';
import {generateCollatz} from './collatz.js'
export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            value: ""

        } 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    
  
    
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
      const collatz_all = generateCollatz(this.state.value)
      const collatz_len = collatz_all[0]
      const collatz_nums = collatz_all[1]
      
          this.setState(state => ({
            len: collatz_len
          }));
          if (this.state.len <30) {
            this.setState(state => ({
              numbers: collatz_nums.map((number) =>
                <span>|{number}</span>)
            })
            )
          }
          ;
          
          event.preventDefault();
          
    }
    
  render() {
    return (
            <div className = "main">
            <form onSubmit = {this.handleSubmit}>
                <label>Collatz Folge & Länge berechnen: </label>
                <input type="text" value = {this.state.value} onChange = {this.handleChange}></input>
                <input type = "submit" value="Berechnen"></input>
            </form>
            <div>
            <h1>Collatz-Folge: {this.state.numbers}</h1>
            <h1>Länge der Collatz-Folge: {this.state.len}</h1>
            </div>
            
            </div>
            
      
    );
  }
}
