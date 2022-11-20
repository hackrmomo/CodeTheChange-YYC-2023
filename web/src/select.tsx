import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SettingsOverscanOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function BasicSelect() {
  const [trust, setTrust] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTrust(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, borderOutline: "white" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
          Sort By
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={trust}
          label="Sort By"
          onChange={handleChange}
          sx={{ color: "white" }}
        >
          <MenuItem value={10}>Most Trusted</MenuItem>
          <MenuItem value={20}>Least Trusted</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

export { BasicSelect, BasicRating };
