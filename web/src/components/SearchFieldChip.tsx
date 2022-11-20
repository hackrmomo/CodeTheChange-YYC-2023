//@ts-nocheck

import { Autocomplete, TextField, Chip } from "@mui/material";
import React from "react";
import {
  IconButton,
} from "@mui/material";

import {
  Search,
} from "@mui/icons-material";

export default function SearchFieldChip() {
  const [receivers, setReceivers] = React.useState<string[]>([]);

  console.log(receivers);
  return (
    <Autocomplete
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 200,
        marginBottom: "20px",
        backgroundColor: "#262525",
        borderRadius: "20px",
      }}
      multiple
      id="tags-filled"
      options={[]}
      defaultValue={[]}
      freeSolo
      onChange={(e, value) => setReceivers((state) => value)}
      renderTags={(
        value: any[],
        getTagProps: (arg0: { index: any }) => JSX.IntrinsicAttributes
      ) =>
        value.map((option: any, index: any) => {
          return (
            <Chip
              key={index}
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          );
        })
      }
      renderInput={(params: any) => (
        <>
          <IconButton
            type="button"
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
          >
            <Search />
          </IconButton>
          <TextField
            {...params}
            sx={{
              input: { color: "white", border: 0, outline: 0 },
              div: { color: "white" },
              svg: { color: "white" },
              path: { color: "white" },
            }}
            size="small"
            placeholder="Search Events"
          />
        </>
      )}
    />
  );
}
