import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Mundial from "./jamoalar/mundial";

export default function CreateLeague() {
  return (
    <Routes>
      <Route path="/mundial" element={<Mundial />} />
    </Routes>
  );
}
