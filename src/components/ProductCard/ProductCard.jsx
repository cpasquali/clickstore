import "./ProductCard.css";

export const ProductCard = ({ product, onDelete }) => {
  const image =
    product.imagen ||
    "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";

  return (
    <article className="product-card">
      <img src={image} alt={`imagen de producto ${product.titulo}`} />
      <div className="card-info">
        <p>{product.titulo}</p>
        <p>$ {product.precio}</p>
      </div>
      <button onClick={() => onDelete(product)} className="card-btn">
        Eliminar
      </button>
    </article>
  );
};
