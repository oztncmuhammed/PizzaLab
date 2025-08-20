import ProductCard from "../components/ProductCard";
import data from "../Data/data.js";

function ProductList({ addToBasket, removeFromBasket }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <ProductCard
              product={item}
              onAddToCart={() => addToBasket(item)}
              onRemoveFromBasket={() => removeFromBasket(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
