import React from "react";
import { Route } from "wouter";
import "./App.css";
import TriviaGame from "./pages/TriviaGame";
import TriviaMain from "./pages/TriviaMain";

function App() {
  return (
    <div className="App">
      <Route path="/game/:name">
        <TriviaGame />
      </Route>
      <Route path="/">
        <TriviaMain />
      </Route>
    </div>
  );
}

export default App;
