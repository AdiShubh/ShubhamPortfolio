import React from "react";
import { Box, Typography } from "@mui/material";
import ExperienceCard from "./Cards/ExperienceCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { experiences } from "../data/Constants";

const Experience = () => {
  return (
    <>
      <Box
        component={"div"}
        id="Experience"
        bgcolor={"#FEF2F2"}
        padding={"20px 0"}
        marginTop={"20px"}
        border={"3px solid tomato"}
        borderRadius={"20px"}
      >
        <Typography
          textAlign={"center"}
          variant="h3"
          margin={"20px 0"}
          color={"#FFD700"}
          sx={{ textShadow: "0.5px 0.5px 0.5px #000" }}
        >
          Experiences
        </Typography>
        <Typography textAlign={"center"} variant="h6">
          My work experience as a software engineer and working on different
          companies and projects.
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
              maxWidth: "650px",
            }}
          >
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
