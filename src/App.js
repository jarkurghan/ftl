import React, { useState } from "react";
import "./App.css";
import Navbar from "./_components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./_components/login";
import LoginAdmin from "./_components/login-admin";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Home from "./_components/home/asosiy";
import CreateLeague from "./_components/create-league/asosiy";
import Standings from "./_components/standings/router";
import Settings from "./_components/settings/settings";
function App() {
  const [_component, set_component] = useState(
    <Box
      sx={{ display: "flex" }}
      style={{
        justifyContent: "center",
        minHeight: "90vh",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
  setTimeout(() => {
    set_component(
      <BrowserRouter>
        {!sessionStorage.getItem("token") && (
          <Routes>
            <Route path="/login/admin" element={<LoginAdmin />} />
            <Route path="*" element={<Login />} />
          </Routes>
        )}
        {sessionStorage.getItem("token") && (
          <div>
            <Routes>
              <Route
                path="/home"
                element={
                  <div>
                    <Navbar />
                    <Home />
                  </div>
                }
              />
              <Route
                path="/standings"
                element={
                  <div>
                    <Navbar />
                    <Standings />
                  </div>
                }
              />
              <Route
                path="/settings"
                element={
                  <div>
                    <Navbar />
                    <Settings />
                  </div>
                }
              />
              <Route path="/create/*" element={<CreateLeague />} />
              <Route path="*" element={<Navbar />} />
              {/* <Route
              path="/login"
              element={
                <div>
                  <Alerts newAlert={newAlert} />
                  <LoginComponent setNewAlert={setNewAlert} />
                </div>
              }
            /> */}
            </Routes>
          </div>
        )}
      </BrowserRouter>
    );
  }, 1500);
  return (
    <div>
      <div className="league"></div>
      {_component}
    </div>
  );
}

export default App;

// const App = () => {
//   const [token, setToken] = useState();
//   const getToken = () => {
//     const formData = new FormData();
//     formData.append("username", "jaxa@gmail.com");
//     formData.append("password", "#Big240701");
//     axios
//       .post("https://ttg-dms-api-v01.herokuapp.com/login", formData, {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       })
//       .then((res) => {
//         sessionStorage.setItem("token", res.data.access_token);
//         setToken(res.data.access_token);
//       })
//       .catch((err) => console.error(err));
//   };
//   useEffect(() => {
//     getToken();
//   }, []);

//   return (
//     <div className="app_wrapper">
//       <div className="App">
//         <Navbar />
//         <div className="body">
//         <Routes>
//           <Route path="/home" element={<h1>Home</h1>} />
//           <Route path="/documents" element={<DocumnetsPage token={token} />} />
//           <Route path="/about" element={<Aboutpage />} />
//           <Route path="/contacts" element={<Contactpage />} />
//           <Route path="/users" element={<UsersPage />} />
//           <Route path="/users/add" element={<UsersAdd />} />
//           <Route path="/assignments" element={<AssignmentPage />} />
//           <Route path="*" element={<NotFound />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/signin" element={<SigninPage />} />
//           <Route path="/loading" element={<Loading />} />
//         </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
