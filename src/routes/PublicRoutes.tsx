import React from "react";
import { Navigate } from "react-router";

interface Props {
  children?: any;
  isAuthenticated?: boolean;
  to?: string;
}

export default function PublicRoute(props: Props):JSX.Element {
  const { children, isAuthenticated, to = "/" } = props;
  return isAuthenticated ? (
    // <Navigate to={(state as any)?.redirect || to} />
    <Navigate to={to} />
  ) : (
    children
  );
}