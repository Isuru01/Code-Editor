import React, { useContext, useState } from "react";
import { Box, Button, Stack, FormControl, FormLabel } from "@mui/material";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import DurationPicker from "../date/DurationPicker";
import { AssigmentContext } from "../../context/CreateAssigmentProvider";

const AssigmentTime = () => {
  const { assigment, setAssigment } = useContext(AssigmentContext);

  //duration state
  const [duration, setDuration] = useState({
    minutes: "",
    hours: "",
    days: "",
  });

  const handleChange = (name, value) => {
    // stringify the time
    if (name === "start" || name === "end") {
      value = dayjs(value).format().toString();
    }

    setAssigment((prev) => ({
      ...prev,
      [name]: value,
      duration,
    }));
  };

  return (
    <Stack spacing={2} direction="row">
      {/* duration */}
      <Box>
        <FormControl>
          <FormLabel>Duration</FormLabel>
          <DurationPicker value={duration} onChange={setDuration} />
        </FormControl>
      </Box>

      {/* available on */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControl>
          <FormLabel>Strarts On</FormLabel>
          <MobileDateTimePicker
            sx={{ width: "330px" }}
            onChange={(value) => handleChange("start", value)}
            defaultValue={dayjs()}
          />
        </FormControl>
      </LocalizationProvider>

      {/* ends on */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormControl>
          <FormLabel>Ends On</FormLabel>
          <MobileDateTimePicker
            sx={{ width: "330px" }}
            onChange={(value) => handleChange("end", value)}
            defaultValue={dayjs()}
          />
        </FormControl>
      </LocalizationProvider>
    </Stack>
  );
};

export default AssigmentTime;
