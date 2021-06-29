import React,{Component, useState,useMemo} from "react";
import './App.css';
export default class Card extends Component{
    constructor(props){
      super(props);
      this.state={
        data: [],
        isLoaded: false,
      }
    }
    componentDidMount(){
      
      const API_URL='https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';
      fetch(API_URL).then(res=>res.json()).then(json=>{this.setState({
        data:json,
        isLoaded: true,
      })
    }).catch((err)=>{
      console.log(err);
    });
        
    }
    
    render(){
      const items=this.state.data;
      const isLoaded=this.state.isLoaded;
      if(!isLoaded) return(<span id="loader">Loading.....</span>);
      let cards;
      if(items){
        cards=items.map((data,idx)=>{
          
            return(
              <li key={idx}>
                <div className="namecard" >{data.first} {data.last}</div>
              </li>
            );
          
        });
      }
    
      return(
        <div>
          <div>
            <ul>{cards}</ul>
          </div>
        </div>
      );
    }
    
    
  
  }