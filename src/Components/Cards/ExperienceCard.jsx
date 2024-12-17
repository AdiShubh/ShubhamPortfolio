import React from "react";
import { Box, Typography } from "@mui/material";
import image from "../../Images/IMG.jpeg";

const ExperienceCard = ({ experience }) => {
  return (
    <>
      <Box
        border={"1px solid red"}
        borderRadius={"10px"}
        name="container"
        padding={"10px 15px"}
        bgcolor={"white"}
      >
        <Box name="role" display={"flex"}>
          <Box marginLeft={"15px"}>
            <Typography margin={"0"} fontSize={"20px"} color={"#2C2C2C"}>
              {experience.role}
            </Typography>
            <Typography fontSize={"16px"} color={"#3F3F3F"}>
              {experience.company}
            </Typography>
            <Typography color={"#757575"}>{experience.date}</Typography>
          </Box>
        </Box>

        {/* <Typography marginLeft={"20px"} color={"#3F3F3F"}>
          My Responsibilities :
        </Typography> */}

        {experience.desc.map((point) => (
          <ul color="#3F3F3F">
            <li>{point}</li>
          </ul>
        ))}
      </Box>
    </>
  );
};

export default ExperienceCard;
