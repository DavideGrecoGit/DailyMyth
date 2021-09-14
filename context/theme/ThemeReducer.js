export const SET_THEME = "SET_THEME";
export const SET_LOADING = "SET_LOADING";
export const SET_THEME_ID = "SET_THEME_ID";

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LOADING:
      return { ...state, themeLoading: action.payload };
    case SET_THEME_ID:
      return { ...state, themeId: action.payload };
    default:
      return state;
  }
};
