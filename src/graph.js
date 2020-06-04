import React, { Component } from 'react';
import {generateCollatz} from './collatz.js'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalBarSeries, XAxis, YAxis} from 'react-vis';
export default class Graph extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[],
         hide: true
      };
      this.handleClick = this.handleClick.bind(this)
    };
    
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
      handleClick(event){
        this.drawChart()
        this.setState({hide: !this.state.hide})
      }
      
      
  render() {
      if (this.state.hide) {
          graph=""
      }
      else{
          var graph = <XYPlot height={300} width={1000} xType="ordinal">
              <XAxis title="Zahl" />
              <YAxis title="Länge der Collatzfolge" />
              <VerticalBarSeries data={this.state.data} />
              </XYPlot>;
      }
    return (
        <div>
        <form>
            
        <input type="button" onClick={this.handleClick} value = "Graph"></input>
        </form>
        
        {graph}
        
        </div>
    );
  }
}
