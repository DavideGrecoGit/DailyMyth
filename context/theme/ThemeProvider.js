import React, { useContext, useReducer } from "react";

import { ThemeReducer } from "./ThemeReducer";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { state, dispatch } = useContext(ThemeContext);
  return [state, dispatch];
};

export const ThemeProvider = ({ children }) => {
  const initialState = {
    theme: null,
  };

  const [themeState, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{
        state: themeState,
        dispatch: dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
