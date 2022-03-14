import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import First from "./First";
import Second from "./Second";

function NestedFile() {
  return (
    <div>
      <h1>This is nested file</h1>
      <ul>
        <li>
          <Link to="/nestedlist/1">First</Link>
        </li>
        <li>
          <Link to="/nestedlist/2">Second</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/1" element={<First />} />
        <Route path="/2" element={<Second />} />
      </Routes>
    </div>
  );
}

export default NestedFile;
