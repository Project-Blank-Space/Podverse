import "./index.css"
import { Routes } from "./routes/Approute"
import { GoogleOAuthProvider } from "@react-oauth/google"

const App = () => {
  return (
    <GoogleOAuthProvider clientId="699628481187-np8ttkfudojv0indq5fvc49lsd1bf5d2.apps.googleusercontent.com">
      <div className="block box-border">
        <Routes />
      </div>
    </GoogleOAuthProvider>

  )
}

export default App
