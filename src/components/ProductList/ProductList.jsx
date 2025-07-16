import "./ProductList.css";
import { products } from "../../data/productos";
import { ProductCard } from "../ProductCard/ProductCard";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";

export const ProductList = () => {
  const [productList, setProductList] = useState(() => {
    const data = localStorage.getItem("product-list");
    return data ? JSON.parse(data) : products;
  });

  const [filteredProducts, setFilteredProducts] = useState(productList);

  const deleteProduct = (product) => {
    setProductList((prevProductList) =>
      prevProductList.filter((p) => p.id !== product.id)
    );
  };

  useEffect(() => {
    localStorage.setItem("product-list", JSON.stringify(productList));
    setFilteredProducts(productList);
  }, [productList]);

  return (
    <div className="main-content-layout">
      <Sidebar
        setFilteredProducts={setFilteredProducts}
        productList={productList}
        setProductList={setProductList}
      />
      <section className="product-list-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={deleteProduct}
          />
        ))}
      </section>
    </div>
  );
};
