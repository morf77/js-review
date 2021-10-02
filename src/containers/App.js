import React, {Component} from "react";
import Nav from "../Components/Nav";
import Information from "../Components/Information"
import {liList} from '../Components/Lilist';
import './App.css';
import {info} from './info'
import myanimation from '../Components/animations'
import show from '../Components/show';

class App extends Component {

  render(){
    return (
      <div className="App bg-navy pa1">
        <Nav liList={liList}/>
        <Information info={info} />
      </div>
    );
  }
  componentDidMount(){
    myanimation();
    show();
  }
}

export default App;
