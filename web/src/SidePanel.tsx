import {
  Box,
} from "@mui/material";

import {
  Public,
  Bolt,
  AddCircleOutline,
} from "@mui/icons-material";

import SearchFieldChip from "./SearchFieldChip";

export default function SidePanel() {
  return (
    <Box display="flex" flexDirection="column" style={{ letterSpacing: "1px" }}>
      <SearchFieldChip />
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
