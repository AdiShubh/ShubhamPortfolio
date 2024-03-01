import React from "react";
import { Box, Typography } from "@mui/material";
import { skills } from "../../data/Constants";

const SkillsCard = () => {
  return (
    <>
      <Box
        padding={"20px 0"}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"20px"}
        width={"100%"}
        bgcolor={"#FEF2F2"}
      >
        {skills.map((skill, index) => (
          <>
            <Box
              key={"index"}
              sx={{
                gap: "30px",
                border: "1.5px solid tomato",
                borderRadius: "10px",
                bgcolor: "white",
                padding: "20px",
              }}
              width={"40%"}
            >
              <Typography
                variant="h5"
                textAlign={"center"}
                marginBottom={"15px"}
              >
                {skill.title}
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                gap={"10px"}
              >
                {skill.skills.map((skill) => (
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"center"}
                    width={"auto"}
                    gap={"10px"}
                    padding={"10px 20px"}
                    borderRadius={"15px"}
                    sx={{ border: "2px solid #FFD700" }}
                  >
                    <img
                      src={skill.image}
                      alt="testImage"
                      width={"24px"}
                      height={"24px"}
                    />
                    <Typography>{skill.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default SkillsCard;
