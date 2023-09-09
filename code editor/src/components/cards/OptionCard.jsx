import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const OptionCard = ({ option }) => {
  const { title, link } = option;

  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte(link);
  };

  return (
    <Card sx={{ minWidth: 345, maxWidth: 345 }} onClick={handleClick}>
      <CardActionArea>
        <CardContent sx={{ pt: "70px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
            earum sapiente numquam quaerat temporibus ratione recusandae dolorum
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default OptionCard;
