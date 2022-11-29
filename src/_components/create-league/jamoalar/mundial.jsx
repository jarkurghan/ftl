import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

export default function TeamsMundial() {
  const [teams, setteams] = React.useState([
    {
      name: "",
      country: "",
    },
  ]);
  //   function change1() {
  React.useEffect(() => {
    console.log("work useeffect");
    let obj = {
      name: "",
      country: "",
    };
    let arr0 = [];
    for (let i = 0; i < 32; i++) {
      arr0.push(obj);
    }
    setteams(arr0);
  }, []);
  //   }
  //   change1();
  //
  function change(index, event) {
    setteams([
      ...teams.slice(0, index),
      {
        name: event.target.value,
        country: flag(event.target.value.toLowerCase()),
      },
      ...teams.slice(index + 1, 32),
    ]);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "flex-start",
      }}
    >
      <h4>Jamoalarni kiriting!</h4>
      <h5>A GURUHI:</h5>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>1-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(0, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[0]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>2-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(1, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[1]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>3-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(2, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[2]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>4-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(3, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[3]?.country} svg />
      </div>
      <h5>B GURUHI:</h5>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>1-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(4, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[4]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>2-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(5, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[5]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>3-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(6, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[6]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>4-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(7, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[7]?.country} svg />
      </div>
      <h5>C GURUHI:</h5>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>1-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(8, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[8]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>2-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(9, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[9]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>3-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(10, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[10]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>4-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(11, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[11]?.country} svg />
      </div>
      <h5>D GURUHI:</h5>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>1-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(12, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[12]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>2-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(13, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[13]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>3-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(14, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[14]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>4-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(15, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[15]?.country} svg />
      </div>
      <h5>E GURUHI:</h5>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>1-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(16, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[16]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>2-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(17, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[17]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>3-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(18, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[18]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>4-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(19, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[19]?.country} svg />
      </div>
      <h5>F GURUHI:</h5>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>1-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(20, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[20]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>2-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(21, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[21]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>3-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(22, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[22]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>4-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(23, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[23]?.country} svg />
      </div>
      <h5>G GURUHI:</h5>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>1-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(24, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[24]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>2-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(25, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[25]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>3-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(26, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[26]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>4-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(27, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[27]?.country} svg />
      </div>
      <h5>H GURUHI:</h5>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>1-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(28, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[28]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>2-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(29, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[29]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>3-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(30, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[30]?.country} svg />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <h6 style={{ margin: "0 20px 20px 0" }}>4-JAMOA:</h6>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            marginRight: "20px",
          }}
          onChange={(e) => {
            change(31, e);
          }}
        />
        <ReactCountryFlag countryCode={teams[31]?.country} svg />
      </div>
      <Link to="/create/created">
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

function flag(text) {
  switch (text) {
    case "rossiya":
      return "RU";
    default:
      return "";
  }
}
