import React, { Component } from "react";
import "./App.css";
import Picture from "./component/cards";
import Wrapper from "./component/container";
import cards from "./cards.json";
var shuffle = require('shuffle-array');

class App extends Component {
  state = {
    cards,
    clicked: [],
    Score: 0,
    game:"Gotta Catch 'Em All "
  };



PictureCli = (id) =>{
  shuffle(cards);

  if (this.state.clicked.includes(id)) {
    this.setState({
      Score: 0,
      clicked: [],
      game:"You clicked this already"
    });
}else{
  this.setState({
    Score:this.state.Score+1,
    clicked:this.state.clicked.concat([id]),
    game:"Correct!"
  });
}
if(this.state.Score === 9){
  this.setState({
    Score: 0,
    clicked: [],
    game:"Congratulations.You won the game!!!"
  });
}

}

// render================

render() {

  return (
    <div className="App">
      <Wrapper>
        <header className="App-header">
          <h2 className="App-intro">
            <strong>
            Gotta Catch 'Em All , but don't catch a pokemon twice
            </strong>
            <p className="Score">
              <strong>
                Current Score: {this.state.Score}
              </strong>
            </p>
            <p className="game">
              <strong>Game status: {this.state.game}</strong>
            </p>
          </h2>
        </header>
        <div className="App-card-wrapper">
            {this.state.cards.map(card => (
              <Picture
                id={card.id}
                key={card.id}
                image={card.image}
                PictureCli={this.PictureCli}
              />
            ))}
          </div>
      </Wrapper>

    </div>
  );
}
}











export default App;
