import { useContext } from "react"
import { Context } from "../context/Context"
import { Navigate } from "react-router-dom"

function AuthLogin({ children }) {
    const { loggedIn } = useContext(Context)
    
    if (loggedIn.length > 0) {
        return children

    }
    return <Navigate to="/sign-in" />
}

export default AuthLogin