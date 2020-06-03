import React, { Component } from 'react';
import './from.css';
import {generateCollatz} from './collatz.js'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalBarSeries, XAxis, YAxis} from 'react-vis';
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
    drawChart(){
      const set = []
      
      for (let index = 0; index < 31; index++) {
        const collatz_all = generateCollatz(index)
        const collatz_len = collatz_all[0]
        console.log(collatz_len, index)
        
        set.push({x:index, y: collatz_len})
      }
      
      
    
      this.setState(state => ({
        data: set
      }))
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
          this.setState(state => ({
            numbers: collatz_nums.map((number) =>
              <span>|{number}</span>)
          }));
          
          event.preventDefault();
          this.drawChart()
    }
    
  render() {
    return (
      <div class = "maincontainer">
            <form onSubmit = {this.handleSubmit}>
                <label>Länge der Collatz Folge berechnen: </label>
                <input type="text" value = {this.state.value} onChange = {this.handleChange}></input>
                <input type = "submit" value="Berechnen"></input>
            </form>
            <span class = "result">
            <h1>Collatz-Folge: {this.state.numbers}</h1>
            <h1>Länge der Collatz-Folge: {this.state.len}</h1>
            </span>
            
            <span className="Graph" class = "graph">
                
              <XYPlot height={300} width={1200} xType="ordinal">
                 
              <XAxis title="Zahl" />
              <YAxis title="Länge der Collatzfolge" />
                <VerticalBarSeries data={this.state.data} />
              </XYPlot>

            </span>
      </div>
    );
  }
}
