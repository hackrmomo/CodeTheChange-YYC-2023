import { Box, Typography, IconButton, Button } from "@mui/material";
import User from "./User";
import { LocationOn, Favorite } from "@mui/icons-material";

export default function Post() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "40px 50px",
        minWidth: "fit-content",
        minHeight: 0,
        borderRadius: "20px",
        background: 'rgba(26,25,25,0.4)'

      }}
    >
      <Box display="flex" justifyContent="space-between" marginBottom="20px">
        <User />
        <Box display="flex" alignItems="center">
          <LocationOn />
          Brazil
        </Box>
      </Box>
      <Typography variant="h5" marginBottom="15px">
        STOP DEFORESTATION IN THE AMAZON
      </Typography>
      <img
        width="100%"
        height="100%"
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/179C0/production/_125840769_hi077252483.jpg"
        style={{ marginBottom: "15px" }}
        alt="rainforest"
      ></img>
      <Typography marginBottom="50px">
        Every year, 1000000 trees are cut down to make room for agriculture and
        industry.
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <IconButton aria-label="fingerprint" sx={{ marginLeft: "-10px" }}>
            <Favorite style={{ color: "white" }} />
          </IconButton>
          30000
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: '10px',
            backgroundColor: "#B8124D",
            "&:hover": {
              backgroundColor: "#B8124D",
            },
          }}
        >
          Take Action
        </Button>
      </Box>
    </Box>
  );
}
