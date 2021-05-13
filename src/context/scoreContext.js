import React from "react";

const ScoreContext = React.createContext(0);

export default {
  ScoreProvider: ScoreContext.Provider,
  ScoreContext,
};
