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

function TextButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button href="#text-buttons">&#8592;Back</Button>
    </Stack>
  );
}

export { BasicSelect, TextButtons, BasicRating };
