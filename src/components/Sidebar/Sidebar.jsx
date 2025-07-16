import "./Sidebar.css";
import { useState } from "react";

export const Sidebar = ({
  setFilteredProducts,
  productList,
  setProductList,
}) => {
  const [form, setForm] = useState({
    titulo: "",
    precio: "",
    imagen: "",
    genero: "",
  });

  const handleFiltered = (e) => {
    if (e.target.value === "all") {
      setFilteredProducts(productList);
    } else {
      setFilteredProducts(
        productList.filter((p) => p.genero === e.target.value)
      );
    }
  };

  /* localStorage.removeItem("product-list"); */

  const uploadImage = async (image) => {
    const CLOUD_NAME = "dobsdzlzl";
    const UPLOAD_PRESET = "clickstore_upload";

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    setForm((prev) => ({
      ...prev,
      imagen: data.secure_url,
    }));
  };

  const handleInputsForm = (e, property, callback) => {
    if (property === "imagen") {
      const image = e.target.files[0];
      if (image) {
        callback(image);
      }
    } else {
      setForm({
        ...form,
        [property]: e.target.value,
      });
    }
  };

  const addProduct = (e, form) => {
    e.preventDefault();
    const { titulo, precio, imagen, genero } = form;
    if (!titulo || !precio || !imagen || !genero) {
      return;
    }
    setProductList([...productList, { ...form, id: productList.length + 1 }]);

    setForm({
      titulo: "",
      precio: "",
    });
  };

  return (
    <section className="sidebar left">
      <section className="gategory-container">
        <h2>Categorias</h2>
        <select onChange={handleFiltered}>
          <option value="all">Todos los Productos</option>
          <option value="Audio">Audio</option>
          <option value="Periféricos">Periféricos</option>
          <option value="Notebooks">Notebooks</option>
          <option value="Celulares-Smartwatch">Celulares y Smartwatch</option>
          <option value="TV">TV</option>
          <option value="Tablets">Tablets</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Componentes">Componentes de PC</option>
        </select>
      </section>
      <section className="add-product-container">
        <form className="form" onSubmit={(e) => addProduct(e, form)}>
          <h2>Agregar Producto</h2>
          <input
            type="text"
            placeholder="Nombre del producto..."
            onChange={(e) => handleInputsForm(e, "titulo")}
            value={form.titulo}
          />
          <input
            type="text"
            placeholder="Precio del producto..."
            onChange={(e) => handleInputsForm(e, "precio")}
            value={form.precio}
          />
          <div className="file-upload">
            <input
              type="file"
              id="file-input"
              className="file-input"
              placeholder="Imagen del producto"
              onChange={(e) => handleInputsForm(e, "imagen", uploadImage)}
            />
            {form.imagen ? (
              <img
                className="img-preview"
                src={form.imagen}
                alt="imagen de producto a subir"
              />
            ) : (
              <label htmlFor="file-input" className="file-button">
                Seleccionar archivo
              </label>
            )}
          </div>

          <select
            type="text"
            id="select-genre"
            placeholder="Genero del producto..."
            onChange={(e) => handleInputsForm(e, "genero")}
          >
            <option value="Audio">Audio</option>
            <option value="Periféricos">Periféricos</option>
            <option value="Notebooks">Notebooks</option>
            <option value="Celulares-Smartwatch">Celulares y Smartwatch</option>
            <option value="TV">TV</option>
            <option value="Tablets">Tablets</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Componentes">Componentes de PC</option>
          </select>
          <button className="btn-upload" type="submit">
            Agregar Producto
          </button>
        </form>
      </section>
    </section>
  );
};
