import React from "react";
import { Box, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <>
      <Box
        bgcolor={"#FEF2F2"}
        padding={"20px 0"}
        margin={"20px 0px 30px 0"}
        border={"3px solid tomato"}
        borderRadius={"20px"}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          color={"#FFD700"}
          sx={{ textShadow: "0.5px 0.5px 0.5px #000" }}
        >
          Contact Me
        </Typography>
        <Typography textAlign={"center"} marginBottom={"20px"} variant="h6">
          Feel free to reach out to me for any questions or opportunities!
        </Typography>
        <Box display={"flex"} gap={"20px"} justifyContent={"space-around"}>
          <Box
            component={"div"}
            id="Contacts"
            sx={{
              border: "1px solid red",
              borderRadius: "15px",
              padding: "20px ",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              width: "33%",
              marginLeft: "25px",
              bgcolor: "white",
            }}
          >
            <PhoneEnabledIcon fontSize="large" color="warning" />
            <Typography>My Number</Typography>
            <Typography>9028867126</Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid red",
              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              width: "33%",
              bgcolor: "white",
            }}
          >
            <AlternateEmailIcon fontSize="large" color="warning" />
            <Typography>My Email</Typography>
            <Typography>chourasia.shubham29@gmail.com</Typography>
          </Box>

          <Box
            sx={{
              border: "1.5px solid tomato",

              borderRadius: "15px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              width: "33%",
              marginRight: "25px",
              bgcolor: "white",
            }}
          >
            <LocationOnIcon fontSize="large" color="warning" />
            <Typography>My Address</Typography>
            <Typography>Damoh M.P. (470661)</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
