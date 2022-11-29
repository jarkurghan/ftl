/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import MundialTable from "./Mundial/table";

export default function Standings() {
  //   const navigate = useNavigate();
  //   React.useEffect(() => {
  //     navigate("/standings/m");
  //   }, []);
  return (
    <div style={{ position: "relative" }}>
      <div
        className="league"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "100%",
          height: "100%",
          zIndex: "0",
        }}
      ></div>
      <Routes>
        <Route path="/*" element={<MundialTable />} />
      </Routes>
    </div>
  );
}
