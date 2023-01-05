import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function SxemaKubok() {
  const [playoff, setAge] = React.useState(16);
  return (
    <div id="kubok">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <FormLabel id="plof">Qaysi bosqichdan boshlanadi:</FormLabel>
        <Select
          aria-labelledby="plof"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={playoff}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        >
          <MenuItem value={128}>1/128</MenuItem>
          <MenuItem value={64}>1/64</MenuItem>
          <MenuItem value={32}>1/32</MenuItem>
          <MenuItem value={16}>1/16</MenuItem>
          <MenuItem value={8}>1/8</MenuItem>
          <MenuItem value={4}>1/4</MenuItem>
          <MenuItem value={2}>1/2</MenuItem>
          <MenuItem value={1}>Final</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Har bir bosqich nechta o'yindan iborat bo'ladi:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="1" control={<Radio />} label="1 ta" />
          <FormControlLabel value="2" control={<Radio />} label="2 ta" />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label-1">
          Shuningdek:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-row-radio-buttons-group-label-1"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="yaxlit"
            control={<Radio />}
            label={
              2 * playoff +
              " ta jamoa ishtirokida bo'ladi va har bir jamoa 1/" +
              playoff +
              " bosqichidan o'yinni boshlaydi"
            }
          />
          <FormControlLabel
            value="qisman"
            control={<Radio />}
            label={
              "Jamoalar soni " +
              2 * playoff +
              " tadan kam, hamma jamoa ham turnirni 1/" +
              playoff +
              " bosqichidan boshlamaydi"
            }
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
