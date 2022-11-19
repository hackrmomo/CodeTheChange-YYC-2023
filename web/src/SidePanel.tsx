import {
  AppBar,
  Toolbar,
  Paper,
  useScrollTrigger,
  Box,
  Container,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";

import {
  LocationOn,
  Favorite,
  Search,
  Public,
  Bolt,
  AddCircleOutline,
} from "@mui/icons-material";

export default function SidePanel() {
  return (
    <Box display="flex" flexDirection="column" style={{ letterSpacing: "1px" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 200,
          marginBottom: "20px",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Events"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <Box
        style={{
          display: "flex",
          fontWeight: "bold",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Public style={{ marginRight: "10px" }} />
        WORLD TRENDING
      </Box>
      <Box
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <Bolt style={{ marginRight: "10px" }} />
        NEW EVENTS
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <AddCircleOutline style={{ marginRight: "10px" }} />
        NEW POST
      </Box>
    </Box>
  );
}
