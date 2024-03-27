import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
     const { userSession } = useSelector(({ credentials }) => credentials);

     const hasRole =
          userSession?.length > 0 &&
          userSession?.some((item) => item?.role === role);

     if (userSession?.length === 0) {
          return <Navigate to="/login" replace={true} />;
     }

     if (role && !hasRole) {
          return <Navigate to="/unauthorized" replace={true} />;
     }

     return <Outlet />;
};

export default ProtectedRoute;
