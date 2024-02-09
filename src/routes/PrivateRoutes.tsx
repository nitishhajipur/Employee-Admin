import React from "react";
import { Navigate, useLocation } from "react-router";

interface Props {
  children?: React.ReactElement;
  isAuthenticated?: boolean;
  to?: string;
}

export default function PrivateRoute(props: Props):any {
  const { children, isAuthenticated, to = "/" } = props;
  const { pathname } = useLocation();
  // .log("15...",pathname,to)
  return isAuthenticated ? (
    children
  ) : (
    <Navigate state={{ redirect: pathname, isAuthenticated }} to={to} />
    // <Navigate to={to} />
  );
}