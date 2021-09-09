import { SET_LOADING, GET_LATEST_ARTICLE, GET_ARTICLE } from "./ArticleReducer";

export const setLoading = (dispatch, status) => {
  dispatch({ type: SET_LOADING, payload: status });
};

export const getRandomArticle = async (dispatch) => {
  setLoading(dispatch, true);

  //Dummy Api call
  await fetch("https://mocki.io/v1/677facb2-20e2-4e7d-9af7-0cb00210cf33")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      dispatch({
        type: GET_ARTICLE,
        payload: "RANDOM article",
      });
    });
};

export const getLatestArticle = async (dispatch, latestArticle) => {
  setLoading(dispatch, true);

  if (latestArticle === null) {
    //Dummy Api call
    await fetch("https://mocki.io/v1/677facb2-20e2-4e7d-9af7-0cb00210cf33")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        dispatch({
          type: GET_LATEST_ARTICLE,
          payload: "LATEST article",
        });
        dispatch({
          type: GET_ARTICLE,
          payload: "LATEST article",
        });
      });
  } else {
    dispatch({
      type: GET_ARTICLE,
      payload: latestArticle,
    });
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
};
