export const GET_LATEST_ARTICLE = "GET_LATEST_ARTICLE";
export const GET_ARTICLE = "GET_ARTICLE";
export const SET_LOADING = "SET_LOADING";

export const ArticleReducer = (state, action) => {
  switch (action.type) {
    case GET_LATEST_ARTICLE:
      return { ...state, latestArticle: action.payload };
    case GET_ARTICLE:
      return { ...state, article: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
