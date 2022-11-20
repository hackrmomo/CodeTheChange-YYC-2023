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
          marginBottom: "20px",
        }}
      >
        <StyledNavLink
          to="/world-trending"
          style={({ isActive }) => {return {fontSize: isActive ? '20px':''}}}
          end
        >
          <Public style={{ marginRight: "10px" }} />
          WORLD TRENDING
        </StyledNavLink>
      </Box>
      <Box
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <StyledNavLink
          to="/new-events"
          style={({ isActive }) => {return {fontSize: isActive ? '20px':''}}}
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
          style={({ isActive }) => {return {fontSize: isActive ? '20px':''}}}
          end
        >
          <AddCircleOutline style={{ marginRight: "10px" }} />
          NEW POST
        </StyledNavLink>
      </Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <StyledNavLink
          to="/charity/red-cross"
          style={({ isActive }) => (isActive ? selected : undefined)}
          end
        >
          <AddCircleOutline style={{ marginRight: "10px" }} />
          DEBUG
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