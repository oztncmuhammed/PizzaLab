import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/NavbarTemp";
import Home from "./pages/Home";
import BasketList from "./pages/BasketList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BasketProvider, BasketContext } from "./context/BasketContext";
import { QueryProvider, QueryContext } from "./context/QueryContext";

function AppContent() {
  const { basketItems, addToBasket, removeFromBasket } =
    useContext(BasketContext);

  const { query, setQuery } = useContext(QueryContext);
  const { basketItemCount } = useContext(BasketContext);

  return (
    <BrowserRouter>
      <Navbar basketItemCount={basketItemCount} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <Home
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
              query={query}
              setQuery={setQuery}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/basket"
          element={
            <BasketList
              basketItems={basketItems}
              onAddToBasket={addToBasket}
              onRemoveFromBasket={removeFromBasket}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function App() {
  return (
    <BasketProvider>
      <QueryProvider>
        <AppContent />
      </QueryProvider>
    </BasketProvider>
  );
}

export default App;
