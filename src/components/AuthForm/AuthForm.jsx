import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, registerUser } from "../../redux/auth/authOperations";

export const registerFormData = [
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Input email",
  },
  {
    type: "text",
    name: "password",
    label: "Password",
    placeholder: "Input password",
  },
  {
    type: "text",
    name: "confirm",
    label: "Confirm",
    placeholder: "Confirm password",
  },
];

export const loginFormData = [
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Input email",
  },
  {
    type: "text",
    name: "password",
    label: "Password",
    placeholder: "Input password",
  },
];

const loginInitValues = {
  email: "",
  password: "",
};
const registerInitValues = {
  email: "",
  password: "",
  confirm: "",
};

const AuthForm = ({ authType }) => {
  const dispatch = useDispatch();
  const formData = authType === "login" ? loginFormData : registerFormData;
  const initialState =
    authType === "login" ? loginInitValues : registerInitValues;

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirm } = form;
    if (authType === "register" && password !== confirm)
      return alert("Wrong confirmation");

    authType === "login" && dispatch(loginUser({ email, password }));

    authType === "register" && dispatch(registerUser({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((el) => (
        <label key={el.name}>
          {el.label}
          <input
            type={el.type}
            name={el.name}
            value={form[el.name]}
            onChange={handleChange}
          />
        </label>
      ))}
      <button type="submit">Submit</button>
      <Link to={authType === "login" ? "/register" : "/login"}>
        {authType === "login" ? "To register" : "To login"}
      </Link>
    </form>
  );
};

export default AuthForm;
