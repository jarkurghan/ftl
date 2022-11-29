import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Ending() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4 style={{ margin: "0" }}>Turnir yaratildi!</h4>
      <h6 style={{ margin: "5px", fontWeight: "500" }}>
        Turnirning boshqa parametrlarini sozlamalar bo'limida o'rnatishingiz
        mumkin
      </h6>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "flex-end",
        }}>
        <Link to="/settings">
          <Button
            variant="outlined"
            style={{ float: "right", margin: "20px 20px 0 0" }}
          >
            Sozlamalar
          </Button>
        </Link>
        <Link to="/home">
          <Button
            variant="contained"
            style={{ float: "right", marginTop: "20px" }}
          >
            Tugatish
          </Button>
        </Link>
      </div>
    </div>
  );
}
