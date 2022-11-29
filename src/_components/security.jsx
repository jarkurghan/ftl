import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function Password(props) {
  const navigate = useNavigate();
  function clickhandler() {
    // props.cancel();
    navigate("/create");
  }
  return (
    <div id="security">
      <div className="block">
        <span>Tasdiqlash</span>
        <hr />
        <div>{props.info}</div>
        <TextField
          id="outlined-basic"
          label="password"
          type="password"
          variant="outlined"
          size="small"
        />
        <div>
          <Button size="small" variant="contained" onClick={clickhandler}>
            Yuborish
          </Button>
          <Button size="small" variant="outlined" onClick={props.cancel}>
            Bekor qilish
          </Button>
        </div>
      </div>
    </div>
  );
}
