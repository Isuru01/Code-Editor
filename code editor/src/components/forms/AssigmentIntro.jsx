import React, { useContext, useState } from "react";
import { Box, TextField, Autocomplete, Stack, Button } from "@mui/material";
import DurationPicker from "../date/DurationPicker";
import { AssigmentContext } from "../../context/CreateAssigmentProvider";
import AssigmentTime from "./AssigmentTime";
import SaveAssigment from "../btn/SaveAssigment";

const AssigmentIntro = () => {
  const { assigment, setAssigment, submit } = useContext(AssigmentContext);

  const handleChange = (name, value) => {
    setAssigment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box>
      <form>
        <Stack spacing={2}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* title */}
            <TextField
              name="title"
              fullWidth
              label="Title"
              variant="outlined"
              value={assigment.title || ""}
              error={assigment.title === "" && submit > 0 ? true : false}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />

            {/* title */}
            <TextField
              name="enrollKey"
              fullWidth
              label="Enroll Key"
              variant="outlined"
              value={assigment.enrollKey || ""}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            {/* group */}
            <Autocomplete
              name="group"
              disablePortal
              fullWidth
              id="combo-box-demo"
              value={groups.find((group) => group.label === assigment.group)}
              options={groups}
              onChange={(event, value) => handleChange("group", value.label)}
              renderInput={(params) => <TextField {...params} label="Field" />}
              error={true}
            />
            {/* module */}
            <Autocomplete
              name="module"
              disablePortal
              fullWidth
              id="combo-box-demo"
              options={modules}
              value={modules.find(
                (module) => module.label === assigment.module
              )}
              onChange={(event, value) => handleChange("module", value.label)}
              renderInput={(params) => <TextField {...params} label="Group" />}
            />
          </Box>

          {/* description */}
          <TextField
            name="description"
            fullWidth
            rows={5}
            multiline
            label="Description"
            variant="outlined"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <AssigmentTime />

          {/* assigment submit btn */}
          <SaveAssigment />
        </Stack>
      </form>
    </Box>
  );
};

const groups = [
  { label: "Y-1 S1 Software Engineering" },
  { label: "Y-1 S2 Software Engineering" },
  { label: "Y-2 S1 Software Engineering" },
  { label: "Y-2 S2 Software Engineering" },
  { label: "Y-3 S1 Software Engineering" },
  { label: "Y-3 S2 Software Engineering" },
];

const modules = [
  { label: "SE1010" },
  { label: "SE1120" },
  { label: "SE2010" },
  { label: "SE2120" },
  { label: "SE3010" },
  { label: "SE3120" },
];

export default AssigmentIntro;
