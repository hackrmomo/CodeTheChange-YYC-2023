import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SettingsOverscanOutlined } from "@mui/icons-material";

export default function BasicSelect() {
  const [trusted, setTrusted] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTrusted(event.target.value as string);
    console.log(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="sort">Sort By</InputLabel>
        <Select value={trusted} onChange={handleChange}>
          <MenuItem value={10}>Most Trusted</MenuItem>
          <MenuItem value={20}>Least Trusted</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
