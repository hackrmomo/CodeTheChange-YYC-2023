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
      <IconButton aria-label="user" style={{ color: "#8891A4" }}>
        <AccountCircle />
      </IconButton>
      @ilovetrees
    </Box>
  );
}
