//@ts-nocheck

import { Autocomplete, TextField, Chip } from "@mui/material";
import React, { useContext } from "react";
import {
  IconButton,
} from "@mui/material";

import {
  Search,
} from "@mui/icons-material";
import { DataContext } from "../util/dataPersistor";

export default function SearchFieldChip() {
  const [receivers, setReceivers] = React.useState<string[]>([]);
  const { addTag, tags } = useContext(DataContext);

  // console.log(receivers);
  return (
    <Autocomplete
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 230,
        marginBottom: "20px",
        backgroundColor: "#262525",
        borderRadius: "6px",
      }}

      multiple
      id="tags-filled"
      options={tags?.map((option) => option.name) || []}
      defaultValue={[]}
      freeSolo
      filterOptions={(options, params) =>
        options.filter((option) => {
          return option.toLowerCase().indexOf(params.inputValue.toLowerCase()) === 0;
        })
      }
      onChange={async (e, value) => {
        console.log(tags);
        if (tags && tags.find && value && value.length > 0) {
          const tag = tags.find((tag) => tag.name === value[value.length - 1]);
          if (!tag) {
            await addTag({ tag: { name: value[value.length - 1] } });
          }
        }
      }}
      renderTags={(
        value: any[],
        getTagProps: (arg0: { index: any }) => JSX.IntrinsicAttributes
      ) =>
        value.map((option: any, index: any) => {
          return (
            <Chip
              key={index}
              variant="standard"
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
            variant="standard"
            {...params}
            InputProps={{ ...params.InputProps, disableUnderline: true }}
            sx={{
              input: { color: "white", border: 0, outline: 0, fontSize: '14px' },
              div: { color: "white" },
              svg: { color: "white" },
              path: { color: "white" },
            }}
            size="small"
            placeholder="Search Causes"
          />
        </>
      )}
    />
  );
}
