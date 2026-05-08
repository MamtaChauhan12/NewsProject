import {
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Stories from "./Pages/Stories";
import Bookmarks from "./Pages/Bookmarks";

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

            <Link
              to="/bookmarks"
              style={{
                color: "white",
                marginRight: "20px"
              }}
            >
              Bookmarks
            </Link>

            <button
              onClick={() => {

                localStorage.removeItem("token");

                window.location.href =
                  "/login";

              }}
              style={{
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
          element={
            isAuthenticated
              ? <Navigate to="/stories" />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated
              ? <Navigate to="/stories" />
              : <Login />
          }
        />

        <Route
          path="/register"
          element={
            isAuthenticated
              ? <Navigate to="/stories" />
              : <Register />
          }
        />

        <Route
          path="/stories"
          element={
            isAuthenticated
              ? <Stories />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/bookmarks"
          element={
            isAuthenticated
              ? <Bookmarks />
              : <Navigate to="/login" />
          }
        />

      </Routes>

    </div>

  );

}

export default App;