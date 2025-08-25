import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/NavbarTemp";
import Home from "./pages/Home";
import BasketList from "./pages/BasketList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [basketItems, setBasketItems] = useState([]);
  const [query, setQuery] = useState("");

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
        // Eğer adedi 1 ise tamamen sil
        return prev;
      }
      if (existingProduct.quantity === 1) {
        return prev.filter((item) => item.id !== productId);
      } else {
        // Adedi 1’den fazla ise bir azalt
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          basketItemCount={basketItems.reduce(
            (total, item) => total + item.quantity,
            0
          )}
        />
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
    </>
  );
}

export default App;
