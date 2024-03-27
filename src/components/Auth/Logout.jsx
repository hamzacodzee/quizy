import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUserSession } from "../../store/slice/CredentialSlice";
import { toast } from "react-toastify";

const Logout = () => {
     const dispatch = useDispatch();
     dispatch(setUserSession([]));
     toast.success("Logout Successfully!");
     return <Navigate to="/login" replace={true} />;
};

export default Logout;
