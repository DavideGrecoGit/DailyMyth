import {
  SET_LOADING,
  SET_ERROR,
  GET_LATEST_ARTICLE,
  GET_ARTICLE,
} from "./ArticleReducer";
import axios from "axios";

export const setLoading = (dispatch, status) => {
  dispatch({ type: SET_LOADING, payload: status });
};

export const setError = (dispatch, error) =>
  dispatch({
    type: SET_ERROR,
    payload: { error: error.status, errorMessage: error.errorMessage },
  });

const handleError = (dispatch, error) => {
  let message = "";
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    message = "The request was unsuccessful.";
  } else if (error.request) {
    // The request was made but no response was received

    console.log(error.request);
    message = "Impossible to contact the server.";
  } else {
    console.log("Error", error.message);
    message = "An error occured.";
  }
  dispatch({
    type: SET_ERROR,
    payload: {
      error: true,
      errorMessage: message,
    },
  });
};

export const getRandomArticle = async (dispatch) => {
  setLoading(dispatch, true);

  //Dummy Api call
  await axios
    .get(`https://mocki.io/v1/43902a53-64ee-453f-ba34-c33a77e8e703`)
    .then((res) => {
      const result = res.data;

      console.log(result);

      dispatch({
        type: GET_ARTICLE,
        payload: result,
      });

      dispatch({
        type: SET_ERROR,
        payload: {
          error: false,
          errorMessage: "",
        },
      });
    })
    .catch(function (error) {
      handleError(dispatch, error);
    });
};

export const getLatestArticle = async (dispatch, latestArticle) => {
  setLoading(dispatch, true);

  let article = latestArticle;

  if (latestArticle === null) {
    //Dummy Api call
    await axios
      .get(`https://mocki.io/v1/1594d4ec-ad3a-4c55-b7b0-675f2084687f`)
      .then((res) => {
        const result = res.data;

        //console.log(result);

        article = result;

        dispatch({
          type: GET_LATEST_ARTICLE,
          payload: article,
        });
      })
      .catch(function (error) {
        handleError(error, dispatch);
        return;
      });
  } else {
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  dispatch({
    type: GET_ARTICLE,
    payload: article,
  });

  dispatch({
    type: SET_ERROR,
    payload: {
      error: false,
      errorMessage: "",
    },
  });
};
