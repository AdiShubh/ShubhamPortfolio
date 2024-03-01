import React from "react";
import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { education } from "../data/Constants";
import EducationCard from "./Cards/EducationCard";

const Education = () => {
  return (
    <>
      <Box
        component={"div"}
        id="Education"
        bgcolor={"#C2EDCE"}
        padding={"20px 0"}
        margin={"20px 0"}
        border={"3px solid tomato"}
        borderRadius={"20px"}
      >
        <Typography
          textAlign={"center"}
          variant="h3"
          margin={"20px 0"}
          color={"tomato"}
        >
          Education
        </Typography>
        <Typography textAlign={"center"} variant="h6">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
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
            {education.map((education, index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>
    </>
  );
};

export default Education;
