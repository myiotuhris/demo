import React,{Component, useState,useMemo} from "react";
import './App.css';
export default class Timer extends Component{
    componentDidMount(){
        timer();
      }
      render(){
        
        return(
    
        <div id="ct">Current Time:</div>);
      }
}
function timer(){
    if(document.getElementById('ct')==null) return;
    var currentTime = new Date()
   var hours = currentTime.getHours()
   var subhr=hours%12;
   var minutes = currentTime.getMinutes()
   var sec = currentTime.getSeconds()
   if (minutes < 10){
       minutes = "0" + minutes
   }
   if (sec < 10){
       sec = "0" + sec
   }
   if (subhr < 10){
    subhr = "0" + subhr
  }
   var t_str = subhr + ":" + minutes + ":" + sec + " ";
   if(hours > 11){
       t_str += "PM";
   } else {
      t_str += "AM";
   }
    document.getElementById('ct').innerHTML = t_str;
    setTimeout(timer,1000);
   }