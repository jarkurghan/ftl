import * as React from "react";
import Stack from "@mui/material/Stack";
import { Navigate, Route, Routes } from "react-router-dom";
import MundialTable from "./Mundial/table";

export default function Standings() {
  return (
    <div id="create">
      <Stack spacing={2} direction="column">
        <Routes>
          <Route
            path="*"
            element={<Navigate to={{ pathname: "/standings/mundial" }} />}
          />
          <Route path="/standings/mundial" element={<MundialTable />} />
        </Routes>
      </Stack>
    </div>
  );
}
