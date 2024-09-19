import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>Imazhi i produktit</label>
            <code className="--color-dark">
              Formatet e supotuara: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>Nuk ka nje imazh per kete produkt.</p>
            )}
          </Card>
          <label>Emri i produktit:</label>
          <input
            type="text"
            placeholder="Emri i produktit"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>Kategoria e produktit:</label>
          <input
            type="text"
            placeholder="Kategoria e produktit"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Cmimi i produktit:</label>
          <input
            type="text"
            placeholder="Cmimi i produktit"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Sasia e produktit:</label>
          <input
            type="text"
            placeholder="Sasia e produktit"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Pershkrimi i produktit:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Ruaj
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
