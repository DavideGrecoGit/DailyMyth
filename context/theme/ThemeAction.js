import { SET_THEME, SET_LOADING, SET_THEME_ID } from "./ThemeReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { light } from "./themes";

const THEME_ASYNC_STORAGE = "@theme";

//TO DO: Store and load only the theme index instead of the theme itself as well

export const setThemeLoading = (dispatch, status) => {
  dispatch({ type: SET_LOADING, payload: status });
};

export const setTheme = async (dispatch, theme, index) => {
  dispatch({ type: SET_THEME, payload: theme });
  dispatch({ type: SET_THEME_ID, payload: index });

  const jsonValue = JSON.stringify({ theme: theme, themeId: index });

  try {
    await AsyncStorage.setItem(THEME_ASYNC_STORAGE, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

// export const setDefaultTheme = (dispatch, theme) => {
// };

export const getDefaultTheme = async (dispatch) => {
  setThemeLoading(dispatch, true);

  try {
    let theme = await AsyncStorage.getItem(THEME_ASYNC_STORAGE);

    if (theme != null) {
      const themeObj = JSON.parse(theme);
      if (themeObj?.theme && themeObj?.themeId) {
        dispatch({ type: SET_THEME, payload: themeObj.theme });
        dispatch({ type: SET_THEME_ID, payload: themeObj.themeId });
        return;
      }
    }
    dispatch({ type: SET_THEME, payload: light });
    dispatch({ type: SET_THEME_ID, payload: 0 });
    setThemeLoading(dispatch, false);
  } catch (e) {
    console.log(e);
  }
};
