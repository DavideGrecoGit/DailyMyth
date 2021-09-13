import React, { useContext, useReducer, createContext } from "react";

import { ArticleReducer } from "./ArticleReducer";
import { ArticleContext } from "./ArticleContext";

export const useArticle = () => {
  const { state, dispatch } = useContext(ArticleContext);
  return [state, dispatch];
};

export const ArticleProvider = ({ children }) => {
  //   const [article, setArticle] = useState("");

  const initialState = {
    latestArticle: null,
    article: null,
    loading: false,
    error: false,
    errorMessage: "",
  };

  const [articleState, dispatch] = useReducer(ArticleReducer, initialState);

  return (
    <ArticleContext.Provider
      value={{
        state: articleState,
        dispatch: dispatch,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
