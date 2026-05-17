import { Navigate } from 'react-router-dom'

const Signinblock = ({children}) => {
  const signedin = localStorage.getItem("signedin")

  if(signedin === 'true'){
    return <Navigate to='/' replace />
  }
  return children
}

export default Signinblock
