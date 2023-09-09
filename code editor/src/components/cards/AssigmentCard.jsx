import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  duration,
  Button,
} from "@mui/material";
import { addPositionPropertiesToSections } from "@mui/x-date-pickers/internals";

const AssigmentCard = ({ assigment }) => {
  const naviagte = useNavigate();

  const {
    key,
    title,
    group,
    duration: { days, hours, minutes },
  } = assigment;

  const handleNavigate = (assigment, aid) => {
    naviagte(`/assigments/${aid}?assigment=${assigment}&aid=${aid}`);
  };

  return (
    <Card sx={{ minWidth: 400, maxWidth: 500, p: 2 }}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>

      <Typography gutterBottom variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, earum
        sapiente numquam quaerat temporibus ratione recusandae dolorum
      </Typography>

      <Typography sx={{ mb: 2, mt: 2 }} variant="h6" component="div">
        {group}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ mb: 2, mt: 2 }}
          color="text.secondary"
          variant="h6"
          component="div"
        >
          Time:
          {days > 0 && `Days ${days}`} {hours > 0 && `${hours}H`}{" "}
          {minutes > 0 && `${minutes} Min`}
        </Typography>

        <Button
          size="large"
          variant="outlined"
          onClick={() => handleNavigate(title, key)}
        >
          Visit
        </Button>
      </Box>
    </Card>
  );
};

export default AssigmentCard;
