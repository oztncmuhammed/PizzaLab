import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (product) => {
    setBasketItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (productId) => {
    setBasketItems((prev) => {
      const existingProduct = prev.find((item) => item.id === productId);
      if (!existingProduct) {
        return prev;
      }
      if (existingProduct.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      } else {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const basketItemCount = basketItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <BasketContext.Provider
      value={{ basketItems, addToBasket, removeFromBasket, basketItemCount }}
    >
      {children}
    </BasketContext.Provider>
  );
}
