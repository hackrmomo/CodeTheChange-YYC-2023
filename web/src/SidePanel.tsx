import { Box } from "@mui/material";

import { Public, Bolt, AddCircleOutline } from "@mui/icons-material";

import SearchFieldChip from "./SearchFieldChip";
import { NavLink } from "react-router-dom";
import "./SidePanel.css";

export default function SidePanel() {
  const selected = {
    fontWeight: "bold",
  };
  return (
    <nav
      style={{ display: "flex", flexDirection: "column", letterSpacing: "1px" }}
    >
      <SearchFieldChip />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <NavLink
          to="/world-trending"
          style={({ isActive }) => (isActive ? selected : undefined)}
          className="navlink"
          end
        >
          <Public style={{ marginRight: "10px" }} />
          WORLD TRENDING
        </NavLink>
      </Box>
      <Box
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <NavLink
          to="/new-events"
          style={({ isActive }) => (isActive ? selected : undefined)}
          className="navlink"
          end
        >
          {" "}
          <Bolt style={{ marginRight: "10px" }} />
          NEW EVENTS
        </NavLink>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <NavLink
          to="/new-post"
          style={({ isActive }) => (isActive ? selected : undefined)}
          className="navlink"
          end
        >
          <AddCircleOutline style={{ marginRight: "10px" }} />
          NEW POST
        </NavLink>
      </Box>
    </nav>
  );
}
