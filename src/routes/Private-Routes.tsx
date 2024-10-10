import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

export const Private_Routes = ({ children }: { children: React.ReactNode }) => {
  const stateUser = localStorage.getItem("authToken");

  if (!stateUser) {
    return <Navigate to="/iniciar-sesion" />;
  }

  try {
    const decodedToken: any = jwtDecode(stateUser);

    if (!decodedToken.exp) {
      return <Navigate to="/iniciar-sesion" />;
    }

    return children;
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return <Navigate to="/iniciar-sesion" />;
  }
};
