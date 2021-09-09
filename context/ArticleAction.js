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
    .get(`https://mocki.iov1/677facb2-20e2-4e7d-9af7-0cb00210cf33`)
    .then((res) => {
      const result = res.data;

      //console.log(result);

      dispatch({
        type: GET_ARTICLE,
        payload: "RANDOM article",
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

  if (latestArticle === null) {
    //Dummy Api call
    await axios
      .get(`https://mocki.io/v1/677facb2-20e2-4e7d-9af7-0cb00210cf33`)
      .then((res) => {
        const result = res.data;

        //console.log(result);

        dispatch({
          type: GET_LATEST_ARTICLE,
          payload: "LATEST article",
        });
        dispatch({
          type: GET_ARTICLE,
          payload: "LATEST article",
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
        handleError(error, dispatch);
      });
  } else {
    dispatch({
      type: GET_ARTICLE,
      payload: latestArticle,
    });

    dispatch({
      type: SET_ERROR,
      payload: {
        error: false,
        errorMessage: "",
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
};
