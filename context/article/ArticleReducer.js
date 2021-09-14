export const GET_LATEST_ARTICLE = "GET_LATEST_ARTICLE";
export const GET_ARTICLE = "GET_ARTICLE";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const ArticleReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, articleLoading: action.payload };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
      };
    case GET_LATEST_ARTICLE:
      return { ...state, latestArticle: action.payload };
    case GET_ARTICLE:
      return { ...state, article: action.payload };
    default:
      return state;
  }
};
