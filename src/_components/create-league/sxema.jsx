import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Mundial from "./sxemalar/mundial";

export default function Reglament() {
  const [age, setAge] = useState("liga");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4>Turnir reglamentini tanlang!</h4>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h5>Reglament turi</h5>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="liga">Liga</MenuItem>
            <MenuItem value="mundial">Mundial</MenuItem>
            <MenuItem value="kubok">Kubok</MenuItem>
          </Select>
        </FormControl>
      </div>
      {age === "mundial" && <Mundial />}
      <Link to="/create/teams/mundial">
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
