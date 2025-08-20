function Basket({ basketItemCount }) {
  console.log("Basket count:", basketItemCount);
  return (
    <button
      type="button"
      className="fs-4"
      style={{ border: "none", background: "transparent" }}
    >
      <i className="bi bi-cart"></i>
      {basketItemCount > 0 && (
        <span className="badge bg-danger ms-1">{basketItemCount}</span>
      )}
    </button>
  );
}

export default Basket;
