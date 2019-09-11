import React, { Component } from "react";
import "./App.css";
import Card from "./component/container";
import Wrapper from "./component/container";
import cards from "./cards.json";
var shuffle = require('shuffle-array');

class App extends Component {
  state = {
    cards,
    cardsOrder : [],
    clicked: [],
    Score: 0,
    game:""
  };



shuffleOnce = () =>{
  const randomOrder= shuffle([1,2,3,4,5,6,7,8,9]);

  console.log(randomOrder);
  this.setState({cardsOrder:randomOrder})
}

isClicked = (id) =>{
  this.shuffleOnce();

  if (this.state.clicked.includes(id)) {
    this.setState({
      Score: 0,
      clicked: [],
      game:"You clicked this already"
    });
}else{
  this.setState({
    Score:this.state.Score+1,
    clicked:this.state.clicked.push(id),
    game:"Correct!"
  });
}
if(this.state.Score === 0){
  this.setState({
    Score: 0,
    clicked: [],
    game:"Congratulations.You won the game!!!"
  });
}

}

// render================

render() {
  let cards = this.state.cardsOrder
  return (
    <div className="App">
      <Wrapper>
        <header className="App-header">
          <h2 className="App-intro">
            <strong>
              Try to click on each only once - clicking on the same card twice
              will reset the game!
            </strong>
            <p className="Score">
              <strong>
                Current Score: {this.state.Score}
              </strong>
            </p>
            <p className="game">
              <strong>ganme status:{this.state.game}</strong>
            </p>
          </h2>
        </header>

      </Wrapper>
    </div>
  );
}
}











export default App;
