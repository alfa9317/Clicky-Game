import React from "react";
import "./style.css";

function Scoreboard(props) {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <header className="scoreB">
        <div className="row">
          <div className="col-6 col-md-4" id="title"><h5>{props.title}</h5></div>
          <div className="col-6 col-md-4" id="message"><h6>{props.message}</h6></div>
          <div className="col-6 col-md-2"><h6>Current Score: {props.score}</h6></div>
          <div className="col-6 col-md-2"><h6>High Score: {props.highScore}</h6></div>
        </div>
        
    </header>
    </nav>
  );
}


export default Scoreboard;