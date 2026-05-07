import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Stories from "./Pages/Stories";

function App() {

  const isAuthenticated =
    !!localStorage.getItem("token");

  return (

    <div>

      <nav
        style={{
          padding: "20px",
          background: "black"
        }}
      >

        {!isAuthenticated && (
          <>

            <Link
              to="/login"
              style={{
                color: "white",
                marginRight: "20px"
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                color: "white",
                marginRight: "20px"
              }}
            >
              Register
            </Link>

          </>
        )}

        {isAuthenticated && (

          <>

            <Link
              to="/stories"
              style={{
                color: "white",
                marginRight: "20px"
              }}
            >
              Stories
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              style={{
                marginLeft: "20px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>

          </>

        )}

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/stories"
          element={<Stories />}
        />

      </Routes>

    </div>

  );

}

export default App;