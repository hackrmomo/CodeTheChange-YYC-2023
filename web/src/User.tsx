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
      <IconButton aria-label="fingerprint" color="secondary">
        <AccountCircle />
      </IconButton>
      @ilovetrees
    </Box>
  );
}
