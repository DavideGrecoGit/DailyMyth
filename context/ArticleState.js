import React, { useContext, useReducer } from "react";

import { ArticleContext } from "./ArticleContex";

import { ArticleReducer } from "./ArticleReducer";

export const useArticle = () => {
  const { state, dispatch } = useContext(ArticleContext);
  return [state, dispatch];
};

export const ArticleState = ({ children }) => {
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
