import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Box,
  Container,
  Typography,
  IconButton,
} from "@mui/material";

import { AccountCircle } from "@mui/icons-material";

export default function User() {
  return (
    <Box>
      <IconButton
        aria-label="user"
        style={{ marginLeft: "-12.5px", color: "#5A7CD4" }}
      >
        <AccountCircle sx={{ fontSize: "50px" }} />
      </IconButton>
      @ilovetrees
    </Box>
  );
}
