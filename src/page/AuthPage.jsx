import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";

const AuthPage = () => {
  const dispatch = useDispatch();
  const { authType } = useParams();

  return (
    <>
      <h1>{authType} Page</h1>
      {authType === "register" || authType === "login" ? (
        <AuthForm authType={authType} />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AuthPage;
