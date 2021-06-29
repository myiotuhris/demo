import React,{Component, useState,useMemo} from "react";
import './App.css';
export default class Counter extends Component{
    constructor(props){
      super(props);
      this.state={
        current: 0,
        leftDisabled: true,
        rightDisabled: false,
        limit: 10,
      }
    }
    increment(){
        if(this.state.rightDisabled) return;
        let newcur=this.state.current+1;
        this.setState({
          leftDisabled: false,
          current: newcur,
          rightDisabled: (newcur===this.state.limit),
        })
    }
    decrement(){
      if(this.state.leftDisabled) return;
      let newcur=this.state.current-1;
        this.setState({
          current: newcur,
          leftDisabled: (newcur===0),
          rightDisabled: false,
        })
    }
    render(){
      const add=this.state.rightDisabled?'is-disabled':'button-operation';
      const minus=this.state.leftDisabled?'is-disabled':'button-operation';
      return (
        <div className="counter">
          <button className={minus} onClick={()=>this.decrement()}>-</button>
          <h3>{this.state.current}</h3>
          <button className={add} onClick={()=>this.increment()}>+</button>
          {/* <div><button onClick={()=>redirect2()}>Go to Page 2</button></div> */}
        </div>
        
      )
        
      
    }
    
  }