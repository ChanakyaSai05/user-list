import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import { addProduct } from "../../features/productReducer";
import { useNavigate } from "react-router-dom";

function Product() {
  const [productName, setProductName] = useState("");
  const [available, setAvailable] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProductBtn = () => {
    dispatch(
      addProduct({
        productName: productName,
        productAvailable: available,
      })
    );
    navigate("/productlist");
  };
  return (
    <div className="container-products">
      <h2>Add Product details</h2>
      <div className="product-options">
        <span>
          <select
            className="select-option"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          >
            <option value="" disabled>
              Product Name
            </option>

            <option>T-Shirt</option>
            <option>Jacket</option>
            <option>Trouser</option>
          </select>
        </span>
        <span>
          <select
            className="select-option"
            value={available}
            onChange={(event) => setAvailable(event.target.value)}
          >
            <option value="" disabled>
              select
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </span>
      </div>
      <div>
        <button className="btn btn-sm btn-primary m-2" onClick={addProductBtn}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Product;
