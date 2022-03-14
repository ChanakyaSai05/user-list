import React from "react";
import { Link } from "react-router-dom";

function NestedFileItem() {
  return (
    <ul>
      <li>
        <Link to="/nestedlist/1">First</Link>
      </li>
      <li>
        <Link to="/nestedlist/2">Second</Link>
      </li>
    </ul>
  );
}

export default NestedFileItem;
