import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} padding={"20px 0"}>
      <Typography textAlign={"center"} variant="h6">
        @Copyright 2024. All Rights Reserved.
      </Typography>
      <Typography marginLeft={"15px"} variant="h6">
        Developed by <span style={{ color: "tomato" }}>Shubham Chourasia</span>
      </Typography>
    </Box>
  );
};

export default Footer;
