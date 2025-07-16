import "./ProductCard.css";

export const ProductCard = ({ product, onDelete }) => {
  return (
    <article className="product-card">
      <img src={product.imagen} alt="" />
      <div className="card-info">
        <p>{product.titulo}</p>
        <p>$ {product.precio.toLocaleString().replaceAll(",", ".")}</p>
      </div>
      <button onClick={() => onDelete(product)} className="card-btn">
        Eliminar
      </button>
    </article>
  );
};
