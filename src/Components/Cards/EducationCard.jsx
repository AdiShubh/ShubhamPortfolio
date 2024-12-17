import React from "react";
import { Box, Typography } from "@mui/material";

const EducationCard = ({ education }) => {
  return (
    <Box
      border={"1px solid red"}
      borderRadius={"10px"}
      name="container"
      padding={"10px 15px"}
      bgcolor={"white"}
    >
      <Box name="role" display={"flex"}>
        <img
          src={education.img}
          alt="schoolImage"
          height={"70px"}
          width={"70px"}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            overflow: "hidden",
            marginTop: "6px",
          }}
        />
        <Box marginLeft={"15px"}>
          <Typography
            margin={"0"}
            fontSize={"20px"}
            lineHeight={"1"}
            color={"#2C2C2C"}
          >
            {education.school}
          </Typography>
          <Typography fontSize={"16px"} color={"#3F3F3F"}>
            {education.degree}
          </Typography>
          <Typography color={"#3F3F3F"}>{education.date}</Typography>
        </Box>
      </Box>
      {/* <Box name="description">
        <Typography>{education.desc}</Typography>
      </Box> */}
    </Box>
  );
};

export default EducationCard;
