import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { QueryContext } from "../context/QueryContext";

function ProductList({ data }) {
  const { removeFromBasket, addToBasket } = useContext(BasketContext);
  const { query } = useContext(QueryContext);

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
