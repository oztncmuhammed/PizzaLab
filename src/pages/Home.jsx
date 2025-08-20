import ProductList from "../components/ProductList";

function Home({ addToBasket, removeFromBasket }) {
  return (
    <div>
      <h1 className="text-center mt-4">Burger Menü</h1>
      <ProductList
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
      />
    </div>
  );
}

export default Home;
