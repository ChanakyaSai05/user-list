import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser, deleteUsers, emptyUsers } from "../../features/userSlice";

import "./UserList.css";
function UserList() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(user);
  const deleteBtn = (index) => {
    if (user.length === 1) {
      dispatch(deleteUsers(index));
      navigate("/");
    } else {
      dispatch(deleteUsers(index));
    }
  };
  const emptyBtn = () => {
    dispatch(emptyUsers());
    navigate("/");
  };
  return (
    <div className="userlists-container">
      <>
        <table style={{ width: "40vw" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {user?.map((item, index) => (
              <tr style={{ textAlign: "center" }} key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
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
                  onClick={emptyBtn}
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

export default UserList;
