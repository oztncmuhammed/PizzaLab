import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/NavbarTemp";
import Home from "./pages/Home";

function App() {
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
      <Navbar
        basketItemCount={basketItems.reduce(
          (total, item) => total + item.quantity,
          0
        )}
      />
      <Home addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
      <Footer />
    </>
  );
}

export default App;
