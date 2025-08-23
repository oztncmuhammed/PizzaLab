function Basket({ basketItems, onAddToBasket, onRemoveFromBasket }) {
  if (basketItems.length === 0) {
    return (
      <div className="text-center mt-4">
        <h2>Sepetiniz Boş</h2>
        <p>Ürün eklemek için lütfen ürün sayfasına gidin.</p>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Sepetiniz</h2>
      <div className="row">
        {basketItems.map((item, index) => (
          <div className="col-12 mb-3" key={index}>
            <div className="card p-3 d-flex flex-row align-items-center">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                className="rounded"
              />
              <div className="ms-3 flex-grow-1">
                <h5>{item.name}</h5>
                <p>{item.price} ₺</p>
                <p>{item.quantity}</p>
              </div>
              <button
                className="bi bi-plus-circle-dotted fs-3"
                style={{ border: "none", background: "transparent" }}
                onClick={() => onAddToBasket(item)}
              ></button>
              <button
                className="bi bi-dash-circle-dotted fs-3"
                style={{ border: "none", background: "transparent" }}
                onClick={() => onRemoveFromBasket(item.id)}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
