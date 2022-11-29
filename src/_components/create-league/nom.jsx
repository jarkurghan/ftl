import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

export default function CreateLeagueName() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4>Turnir uchun nom tanlang!</h4>
      <TextField
        id="outlined-basic"
        variant="outlined"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
      />
      <Link to="/create/schema">
        <Button
          variant="contained"
          style={{ float: "right", marginTop: "20px" }}
        >
          Keyingi
        </Button>
      </Link>
    </div>
  );
}
