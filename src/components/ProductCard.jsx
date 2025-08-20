function ProductCard({ product, onAddToCart, onRemoveFromBasket }) {
  return (
    <div className="card rounded-4 shadow-lg h-100">
      <img
        src={product.image}
        className="card-img-top rounded-top-4"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="fw-bold mt-2">{product.price} ₺</p>
        <button
          className="bi bi-plus-circle-dotted fs-3"
          style={{ border: "none", background: "transparent" }}
          onClick={onAddToCart}
        ></button>
        <button
          className="bi bi-dash-circle-dotted fs-3"
          style={{ border: "none", background: "transparent" }}
          onClick={onRemoveFromBasket}
        ></button>
      </div>
    </div>
  );
}

export default ProductCard;
