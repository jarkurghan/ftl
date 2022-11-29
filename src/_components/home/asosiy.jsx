import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Password from "../security";

export default function Home() {
  const [age, setAge] = useState("10");
  const [createleague, setcl] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div id="home">
      <div className="h-active">
        <span>Faol Turnir</span>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="h-info">
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Turnir haqida ma'lumotlar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nom</td>
              <td>Jahon chempionati - 2022</td>
            </tr>
            <tr>
              <td>Yararilgan vaqti</td>
              <td>11-noyabr</td>
            </tr>
            <tr>
              <td>Kim tomonidan ochilgan</td>
              <td>Elyor</td>
            </tr>
            <tr>
              <td rowSpan={3}>Adminlar</td>
              <td>Elyor</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: "min(15px, 5vw)" }}>
                Najmiddin
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: "min(15px, 5vw)" }}>
                VFL
              </td>
            </tr>
            <tr>
              <td>Yararilgan vaqti</td>
              <td>11-noyabr</td>
            </tr>
            <tr>
              <td>Kim tomonidan ochilgan</td>
              <td>Elyor</td>
            </tr>
            <tr>
              <td>Nom</td>
              <td>Jahon chempionati - 2022</td>
            </tr>
            <tr>
              <td>Nom</td>
              <td>Jahon chempionati - 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-create">
        <Button
          variant="contained"
          onClick={() => {
            setcl(true);
          }}
        >
          Yangi turnir yaratish
        </Button>
        {createleague && (
          <Password
            info="Yangi turnir tashkil qilish uchun parolingizni kiriting:"
            cancel={() => {
              setcl(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
