import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectProduct,
  deleteProduct,
  emptyProduct,
} from "../../features/productReducer";
import "./ProductList.css";

function ProductList() {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(product);
  const deleteBtn = (index) => {
    if (product.length === 1) {
      dispatch(deleteProduct(index));
      navigate("/product");
    } else {
      dispatch(deleteProduct(index));
    }
  };
  const emptyProductBtn = () => {
    dispatch(emptyProduct());
    navigate("/product");
  };
  return (
    <div className="productlists-container">
      <>
        <table style={{ width: "40vw" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Product</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {product?.map((item, index) => (
              <tr style={{ textAlign: "center" }} key={index}>
                <td className="product-table">{item.productName}</td>
                <td>{item.productAvailable}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger m-2"
                    onClick={() => deleteBtn(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td style={{ textAlign: "center" }}>
                <button
                  className="btn btn-sm btn-danger m-2"
                  onClick={emptyProductBtn}
                >
                  Empty list
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    </div>
  );
}

export default ProductList;
