import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddUser.css";
import { addUsers, selectUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const ref = useRef();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adduserBtn = () => {
    if (user.find((el) => el.name === name && el.email === email)) {
      alert("This name & email is already exist in userlist");
      setName("");
      setEmail("");
      return;
    } else {
      dispatch(
        addUsers({
          name: name,
          email: email,
        })
      );
      navigate("/userlist");
    }
  };
  useEffect(() => {
    ref.current.focus();
  }, [name]);
  // console.log(ref.current.value);
  // console.log(document.getElementById("inputname").value);
  return (
    <div className="usercontainer">
      <div className="input">
        <h1>Add Users</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            id="inputname"
            value={name}
            ref={ref}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-primary btn-sm m-2" onClick={adduserBtn}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
