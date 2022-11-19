import { Box, Card, Typography, IconButton, Button } from "@mui/material";
import User from "./User";
import { LocationOn, Favorite } from "@mui/icons-material";

export default function Post() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid grey",
        padding: "40px 50px",
        minWidth: "fit-content",
        minHeight: 0,
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <User />
        <Box>
          <LocationOn />
          Brazil
        </Box>
      </Box>
      <Typography variant="h5"> STOP DEFORESTATION IN THE AMAZON</Typography>
      <img
        width="100%"
        height="100%"
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/179C0/production/_125840769_hi077252483.jpg"
      ></img>
      <Typography>
        Every year, 1000000 trees are cut down to make room for agriculture and
        industry.
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <IconButton aria-label="fingerprint" color="secondary">
            <Favorite />
          </IconButton>
          30000
        </Box>
        <Button variant="contained">Take Action</Button>
      </Box>
    </Box>
  );
}
