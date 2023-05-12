import actionTypes from "./actionTypes";

export const addToFavorites = (product) => {
  return (dispatch) => {
    // Thêm sản phẩm vào local storage
    const favorites = localStorage.getItem("favorites");
    let favoritesList = favorites ? JSON.parse(favorites) : [];
    favoritesList.push(product);
    localStorage.setItem("favorites", JSON.stringify(favoritesList));

    // Dispatch action để thêm sản phẩm vào Redux store
    dispatch({
      type: actionTypes.ADD_TO_FAVORITES,
      payload: product,
      meta: { incrementCount: true },
    });
  };
};

export const removeFromFavorites = (productId) => {
  return (dispatch) => {
    // Xoá sản phẩm khỏi local storage
    const favorites = localStorage.getItem("favorites");
    let favoritesList = favorites ? JSON.parse(favorites) : [];
    favoritesList = favoritesList.filter((product) => product.id !== productId);
    localStorage.setItem("favorites", JSON.stringify(favoritesList));

    // Dispatch action để xoá sản phẩm khỏi Redux store
    dispatch({
      type: actionTypes.REMOVE_FROM_FAVORITES,
      payload: productId,
    });
  };
};

export const removeAllFavorites = () => {
  return (dispatch) => {
    // Xoá tất cả sản phẩm từ local storage
    localStorage.removeItem("favorites");

    // Dispatch action để xoá tất cả sản phẩm từ Redux store
    dispatch({
      type: actionTypes.REMOVE_ALL_FAVORITES,
    });
  };
};
