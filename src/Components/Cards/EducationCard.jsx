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
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            overflow: "hidden",
            marginTop: "6px",
          }}
        />
        <Box marginLeft={"15px"}>
          <Typography margin={"0"} fontSize={"25px"} lineHeight={"1"}>
            {education.school}
          </Typography>
          <Typography fontSize={"18px"}>{education.degree}</Typography>
          <Typography>{education.date}</Typography>
        </Box>
      </Box>
      {/* <Box name="description">
        <Typography>{education.desc}</Typography>
      </Box> */}
    </Box>
  );
};

export default EducationCard;
