import * as React from "react";
import { TextField } from "@mui/material";

export default function SxemaMundial() {
  return (
    <div id="mundial">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h5>Jamoalar soni:</h5>
        <TextField
          id="outlined-basic"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          value={32}
          style={{
            backgroundColor: "transparent",
            width: "30px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h5>Guruhlar soni:</h5>
        <TextField
          id="outlined-basic"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          value={8}
          style={{
            backgroundColor: "transparent",
            width: "30px",
          }}
        />
      </div>
      <div>
        <h5>Pley off:</h5>
        <div>...</div>
      </div>
    </div>
  );
}
