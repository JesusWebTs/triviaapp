import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { TriviaGame, ScoreGame, TriviaMain } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/game/:name">
            <TriviaGame />
          </Route>
          <Route path="/score">
            <ScoreGame />
          </Route>
          <Route exact path="/">
            <TriviaMain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
