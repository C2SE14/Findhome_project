import actionTypes from "../actions/actionTypes";

const favoritesFromLocalStorage = localStorage.getItem("favorites");
const initState = {
  favorites: favoritesFromLocalStorage
    ? JSON.parse(favoritesFromLocalStorage)
    : [],
  count: favoritesFromLocalStorage
    ? JSON.parse(favoritesFromLocalStorage).length
    : 0,
  saveDate: null,
};

const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        count: state.count + 1,
        saveDate: Date.now(),
      };

    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.payload
        ),
        count: state.count - 1,
        saveDate: Date.now(),
      };

    case actionTypes.REMOVE_ALL_FAVORITES:
      return {
        ...state,
        favorites: [],
        count: 0,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
