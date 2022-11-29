import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="login">
      <Stack spacing={2} direction="column">
        <h4>Siz kimsiz?</h4>
        <Link to="/login/admin">
          <Button variant="contained">Admin</Button>
        </Link>
        <Link to="/login/participant">
          <Button variant="contained">Ishtirokchi</Button>
        </Link>
        <Link to="/login/guest">
          <Button variant="contained">Mehmon</Button>
        </Link>
      </Stack>
    </div>
  );
}
