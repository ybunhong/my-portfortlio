import { mainRoute } from "./main";
import { useRoutes } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Router() {
  return useRoutes([
    ...mainRoute,
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
