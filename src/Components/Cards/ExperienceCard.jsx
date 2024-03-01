import React from "react";
import { Box, Typography } from "@mui/material";
import image from "../../Images/IMG.png";

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
          <img
            src={experience.img}
            alt="companyImage"
            height={"70px"}
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              overflow: "hidden",
              marginTop: "6px",
            }}
          />
          <Box marginLeft={"15px"}>
            <Typography margin={"0"} fontSize={"28px"}>
              {experience.role}
            </Typography>
            <Typography fontSize={"18px"}>{experience.company}</Typography>
            <Typography>{experience.date}</Typography>
          </Box>
        </Box>

        <Typography marginLeft={"20px"}>My Responsibilities :</Typography>

        {experience.desc.map((point) => (
          <ul>
            <li>{point}</li>
          </ul>
        ))}
      </Box>
    </>
  );
};

export default ExperienceCard;
