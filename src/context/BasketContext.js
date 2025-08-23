import React, { createContext, useReducer, useContext } from "react";
import { basketReducer, initialState } from "../reducers/basketReducer";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

// ✅ Burayı ekle
export const useBasket = () => useContext(BasketContext);
