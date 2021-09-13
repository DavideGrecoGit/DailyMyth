import { SET_THEME } from "./ThemeReducer";

export const setTheme = (dispatch, theme) => {
  dispatch({ type: SET_THEME, payload: theme });
};
