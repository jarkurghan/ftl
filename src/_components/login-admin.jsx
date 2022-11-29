import React, { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom/dist";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [component, setComponent] = useState(
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
  setTimeout(() => {
    setComponent(
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 0, width: "25ch", marginBottom: "20px" },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Id"
          variant="filled"
          style={{
            backgroundColor: "white",
          }}
        />
        <TextField
          id="filled-basic"
          label="Parol"
          variant="filled"
          style={{
            backgroundColor: "white",
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            sessionStorage.setItem("token", "token");
            window.location.reload();
            setTimeout(() => {
              navigate("/");
            }, 500);
          }}
        >
          Login
        </Button>
      </Box>
    );
  }, 1500);
  return <div id="login">{component}</div>;
}
