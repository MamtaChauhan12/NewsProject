import {Routes, Route,Link,Navigate} from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Stories from "./Pages/Stories";

function App() {
//authentication chcek here 
  const isAuthenticated = !!localStorage.getItem("token");

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
          <Link
            to="/stories"
            style={{
              color: "white"
            }}
          >
            Stories
          </Link>
        )}

      </nav>

      <Routes>

        <Route path="/" element={<Navigate to="/register" />} />

  
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

      </Routes>

    </div>

  );

}

export default App;