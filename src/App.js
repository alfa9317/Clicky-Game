import React, { Component } from "react";
import Jello from 'react-reveal/Jello';
import Tada from 'react-reveal/Tada';
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";
import characters from "./characters.json";
import Title from "./components/Title";

function shuffle(array) {
  // for (var i=0; i<array.length; i++){
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [array[i], array[j]] = [array[j], array[i]];
  // }
  array.sort(function (a, b) { return 0.5 - Math.random() })
  return array;
}

class App extends Component {

  state = {
    message:"Click an image to begin!!",
    score:0,
    highScore:0,
    flag: 0,
    inCharacters:characters,
    characters,
  };

  handleClick = id => {
    var outCharacters = this.state.inCharacters.filter(character => character.id !== id);
    if(outCharacters.length===this.state.inCharacters.length){
      this.setState({message:"Opps! Try again"});
      outCharacters=this.state.characters;
      var highScoreUpdate = this.state.highScore<this.state.score ? this.state.score : this.state.highScore;
      if(this.state.flag===0){
        this.setState({flag:1,characters: shuffle(characters), inCharacters: outCharacters,score: 0, highScore: highScoreUpdate});
      }else{
        this.setState({flag:0,characters: shuffle(characters), inCharacters: outCharacters, score: 0, highScore: highScoreUpdate});
      }
    }else if(outCharacters<=0){
      this.setState({message:"Great Job! Play again",score:0,characters:shuffle(characters),inCharacters:characters,highScore:characters.length});
    }else{
      this.setState({characters: shuffle(characters), inCharacters: outCharacters,score: this.state.score + 1,message:"Nice! You can do it" });
    }
    
  }


  render() {
    console.log(this.state.inCharacters);
    return (
      <div>
        <Scoreboard
          title="Clicky Game"
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jello spy={this.state.flag}>
        <Tada>
          <Title/>
        </Tada>
        <Wrapper>
          {this.state.characters.map(character => (
            <Character
              handleClick={this.handleClick}
              status={character.status}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </Wrapper>
        </Jello>
        
      </div>
      
      
    );
  }
}

export default App;