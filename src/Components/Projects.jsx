import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./Cards/ProjectCard";

const Projects = () => {
  return (
    <>
      <Box
        component={"div"}
        id="Projects"
        bgcolor={"#C2EDCE"}
        padding={"20px 0"}
        margin={"20px 0"}
        border={"3px solid tomato"}
        borderRadius={"20px"}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          margin={"20px 0 10px 0"}
          color={"tomato"}
        >
          Projects
        </Typography>
        <Typography textAlign={"center"} variant="h6">
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={"30px"}
          marginTop={"20px"}
          paddingBottom={"20px"}
        >
          <ProjectCard />
        </Box>
      </Box>
    </>
  );
};

export default Projects;
