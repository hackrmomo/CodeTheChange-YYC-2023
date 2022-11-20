import { Box } from "@mui/material";

import { Public, Bolt, AddCircleOutline } from "@mui/icons-material";

import SearchFieldChip from "./SearchFieldChip";
import { NavLink } from "react-router-dom";

import { styled } from "@mui/system";

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
        <StyledNavLink
          to="/world-trending"
          style={({ isActive }) => (isActive ? selected : undefined)}
          end
        >
          <Public style={{ marginRight: "10px" }} />
          WORLD TRENDING
        </StyledNavLink>
      </Box>
      <Box
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <StyledNavLink
          to="/new-events"
          style={({ isActive }) => (isActive ? selected : undefined)}
          end
        >
          {" "}
          <Bolt style={{ marginRight: "10px" }} />
          NEW EVENTS
        </StyledNavLink>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <StyledNavLink
          to="/new-post"
          style={({ isActive }) => (isActive ? selected : undefined)}
          end
        >
          <AddCircleOutline style={{ marginRight: "10px" }} />
          NEW POST
        </StyledNavLink>
      </Box>
    </nav>
  );
}

const StyledNavLink = styled(NavLink)`
  && {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
  }
`