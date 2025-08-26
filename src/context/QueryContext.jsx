import { createContext, useState } from "react";

export const QueryContext = createContext();

export function QueryProvider({ children }) {
  const [query, setQuery] = useState("");

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
}
