import * as React from "react";
import Stack from "@mui/material/Stack";
import CreateLeagueName from "./nom";
import { Route, Routes } from "react-router-dom";
import Reglament from "./sxema";
import Teams from "./jamoalar";
import Ending from "./tugatish";

export default function CreateLeague() {
  return (
    <div id="create">
      <Stack spacing={2} direction="column">
        <Routes>
          <Route path="/schema" element={<Reglament />} />
          <Route path="/created" element={<Ending />} />
          <Route path="/teams/*" element={<Teams />} />
          <Route path="*" element={<CreateLeagueName />} />
        </Routes>
      </Stack>
    </div>
  );
}
