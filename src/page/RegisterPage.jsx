import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/authOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Register Page</h1>
      <button
        onClick={() =>
          dispatch(
            registerUser({ email: "user@mail.com", password: "user1324" })
          )
        }
      >
        CLICK
      </button>
    </>
  );
};

export default RegisterPage;
