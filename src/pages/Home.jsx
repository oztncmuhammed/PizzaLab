import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";

function Home({ addToBasket, removeFromBasket, query, setQuery }) {
  return (
    <div>
      <Slider />
      <h1 className="text-center mt-4">Pizza Menu</h1>
      <SearchBar setQuery={setQuery} />
      <ProductList
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
        query={query}
      />
    </div>
  );
}

export default Home;
