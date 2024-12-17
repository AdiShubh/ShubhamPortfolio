import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Bio } from "../data/Constants";
import image from "../Images/IMG.jpeg";

const About = () => {
  return (
    <Box
      component={"div"}
      id="About"
      sx={{
        padding: "80px 120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <Box sx={{ width: "60%", height: "100%" }}>
        <Typography
          variant="h3"
          paddingLeft={"10px"}
          sx={{ fontWeight: "bold", mb: "10px" }}
        >
          Hi, I am{" "}
        </Typography>
        <Typography
          color={"#FFD700"}
          variant="h3"
          paddingLeft={"10px"}
          sx={{
            fontWeight: "bold",
            mb: "8px",
            textShadow: "0.5px 0.5px 0.5px #000",
          }}
        >
          {Bio.name}
        </Typography>
        <Typography variant="h4" paddingLeft={"10px"} sx={{ mb: "6px" }}>
          I am a <span style={{ color: "tomato" }}>React JS developer</span>
        </Typography>
        <Typography variant="h6" padding={"10px"} marginBottom={"10px"}>
          {Bio.description}
        </Typography>
        <Button
          href={Bio.resume}
          target="_blank"
          variant="outlined"
          size="large"
          sx={{
            fontSize: "20px",
            marginLeft: "10px",
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "20px",
            color: "red ",
            borderColor: "red",
          }}
        >
          Check Resume
        </Button>
      </Box>
      <Box
        sx={{
          width: "60%",

          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt="hero"
          style={{
            position: "relative",
            width: "500px",
            height: "700px",
            border: "3px solid tomato",
            borderRadius: "10%",
            maxHeight: "400px",
            objectfit: "cover",
            margin: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
