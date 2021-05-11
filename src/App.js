import React from "react";
import { Route } from "wouter";
import "./App.css";
import { TriviaGame, ScoreGame, TriviaMain } from "./pages";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <TriviaMain />
      </Route>
      <Route path="/game/:name">
        <TriviaGame />
      </Route>
      <Route path="/score">
        <ScoreGame />
      </Route>
    </div>
  );
}

export default App;
