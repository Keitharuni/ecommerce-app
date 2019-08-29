import { createSelector } from "reselect";

//input selectors
const selectCart = state => state.cart;

//export selectors
export const selectCartItems = createSelector(
  //array of input selectors first argument(could also be an export selector), second arg function return value we want out of selector can have more than one input selector as first argument [selectCart, selectUser], (cart, user)
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumlatedQuantity, cartItem) =>
        accumlatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
