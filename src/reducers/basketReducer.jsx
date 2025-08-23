export const initialState = {
  basketItems: [],
};

export function basketReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const existingItem = state.basketItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Ürün varsa quantity +1
        return {
          ...state,
          basketItems: state.basketItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Ürün yoksa quantity = 1 ile ekle
        return {
          ...state,
          basketItems: [
            ...state.basketItems,
            { ...action.payload, quantity: 1 },
          ],
        };
      }
    }

    case "REMOVE_FROM_BASKET": {
      const existingItem = state.basketItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) return state;

      if (existingItem.quantity === 1) {
        // quantity 1 ise ürünü tamamen sil
        return {
          ...state,
          basketItems: state.basketItems.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      } else {
        // quantity > 1 ise bir azalt
        return {
          ...state,
          basketItems: state.basketItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
    }

    case "UPDATE_BASKET_ITEM":
      return {
        ...state,
        basketItems: state.basketItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
}
