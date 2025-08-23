import ProductCard from "../components/ProductCard";
import data from "../Data/data.js";

function ProductList({ addToBasket, removeFromBasket, query }) {
  const filtredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="container">
      <div className="row">
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={item.id}
            >
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
