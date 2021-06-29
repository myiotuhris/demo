import React,{Component, useState,useMemo} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory
} from "react-router-dom";
import './App.css';
import Counter from './Counter';
import Timer from './Timer';
import Card from './Card';
import Converter from "./Converter";

export default function App() {
  return (
    <Router>
      <div>
          <Route exact path="/">
            <WelcomePage/>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/time">
            <Time />
          </Route>
          <Route exact path="/data">
            <Data />
          </Route>
          <Route exact path="/currency">
            <Currency/>
          </Route>
      </div>
    </Router>
  );
}
function WelcomePage(){
  return (
    <div>
      <h2 >Welcome to the main page</h2>
      <ul>
        <li><Link to="/home">Go to Page 1</Link></li>
        <li><Link to="/time">Go to Page 2</Link></li>
        <li><Link to="/data">Go to Page 3</Link></li>
        <li><Link to="/currency">Go to Page 4</Link></li>
      </ul>
    </div>
  );
}

function Home() {
  const history=useHistory();
  return (
    <div>
      <button onClick={()=>history.push('/time')} style={{float:"right",width: "100px"}}>Page 2 </button>
      <h2>Page 1: A Simple Counter Counting From 0 to 10</h2>
    <Counter/>
    
    </div>
  );
}

function Time() {
  const history=useHistory();
  return (
    <div>
      <button onClick={()=>history.push('/home')} style={{width: "100px"}}>Page 1</button>
      <button onClick={()=>history.push('/data')} style={{float:"right",width:"100px"}}>Page 3</button>
      <h2>Page 2: Current Time</h2>
      <Timer/>
      
    </div>
  );
}

function Data() {
  const history=useHistory();
  return (
    <div>
      <button onClick={()=>history.push('/time')} style={{width: "100px"}}>Page 2</button>
      <button onClick={()=>history.push('/currency')} style={{float:"right",width:"100px"}}>Page 4</button>
      <h2>Page 3: Getting a List of Names From an API</h2>
      <Card/>
    </div>
  );
}

function Currency() {
  const history=useHistory();
  return (
    <div>
      <button onClick={()=>history.push('/data')} style={{width: "100px"}}>Page 3</button>
      <button onClick={()=>history.push('/home')} style={{float:"right",width:"100px"}}>Page 1</button>
      <h2>Page 4: Currency Converter</h2>
      <Converter/>
    </div>
  );
}


