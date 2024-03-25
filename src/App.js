import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import useGenerateToken from "./hooks/generateToken";
import useGenerateRefreshToken from "./hooks/generateRefreshToken";

// DATE 7 dec 2023
function App() {

    useGenerateToken();
    const { isLoading, error, requestRefreshToken } = useGenerateRefreshToken();
    const token = useSelector(state => state.auth.access_token);
    useEffect(() => {
        const code = sessionStorage.getItem("code");
        const refresh_token = sessionStorage.getItem("refresh");
        if (code && refresh_token && !token) {
            requestRefreshToken();
        }
    }, [token, requestRefreshToken])
    return (
        <div className="App">
            {token ? <Home isLoading={isLoading} /> : <Login />}
        </div>
    );
}

export default App;
