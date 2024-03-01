import React from "react";
import { Box, Typography } from "@mui/material";
import SkillsCard from "./Cards/SkillsCard";

const Skills = () => {
  return (
    <Box
      component={"div"}
      id="Skills"
      bgcolor={"#FEF2F2"}
      border={"3px solid tomato"}
      borderRadius={"20px"}
      sx={{
        padding: "10px 0 10px 0",
        margin: "0px",
      }}
    >
      <Typography
        variant="h3"
        color={"#FFD700"}
        sx={{
          textAlign: "center",
          padding: "10px",
          marginTop: "20px",
          textShadow: "0.5px 0.5px 0.5px #000",
        }}
      >
        Skills
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center" }} gutterBottom="true">
        Here are some of my skills on which I have been working{" "}
      </Typography>
      <SkillsCard />
    </Box>
  );
};

export default Skills;
