import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
  const isLoggedin = localStorage.getItem("signedin") === "true";   

  if(!isLoggedin){
    return <Navigate to="/login" replace/>
  }
  return children;
};

export default ProtectedRoute
