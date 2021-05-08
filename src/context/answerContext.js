import React from "react";

const SelectedAnswerContext = React.createContext("");

export default {
  SelectedAnswerProvider: SelectedAnswerContext.Provider,
  SelectedAnswerContext,
};
