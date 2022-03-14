import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import AddUser from "./components/adduser/AddUser";
import UserList from "./components/userlist/UserList";
import Product from "./components/product/Product";
import ProductList from "./components/productlist/ProductList";
import NestedFile from "./components/nestedfile/NestedFile";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<AddUser />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="product" element={<Product />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="nestedlist/*" element={<NestedFile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
