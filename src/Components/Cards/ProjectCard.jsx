import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { projects } from "../../data/Constants";
import { Link } from "@mui/material";

const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => (
        <>
          <Card
            key={project.id}
            sx={{
              maxWidth: 320,
              padding: "10px",
              border: "1px solid tomato",
              borderRadius: "10px",
              ":hover": {
                boxShadow: 20,
                transform: "scale3d(1.02, 1.02, 1)",
                transition: "transform 0.15s ease-in-out",
              },
            }}
          >
            <CardMedia
              component="img"
              alt="project image"
              height="200"
              image={project.image}
              border={"1px solid black"}
              borderRadius={"10px"}
              sx={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  //maxHeight: "100px",
                  height: "80px",
                  display: "-webkit-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",

                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {project.description}
              </Typography>

              <Box
                display={"flex"}
                alignItems={"center"}
                flexWrap={"wrap"}
                gap={"5px"}
                marginTop={"10px"}
              >
                {project.tags.map((tag) => (
                  <Typography
                    key={tag}
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginRight: "5px" }}
                    border={"2px solid #FFD700"}
                    borderRadius={"5px"}
                    padding={"2px 5px"}
                  >
                    {tag}
                  </Typography>
                ))}
              </Box>
              {/* Link buttons */}
              <Box
                display={"flex"}
                gap={"10px"}
                justifyContent={"space-around  "}
                alignItems={"center"}
                marginTop={"20px"}
                border={"1px solid gray"}
                borderRadius={"5px"}
                padding={"2px 5px"}
              >
                <Link underline="none" href={project.github} target="_blank">
                  Git Hub
                </Link>
                <Link underline="none" href={project.webapp} target="_blank">
                  Web Link
                </Link>
              </Box>
            </CardContent>
          </Card>
        </>
      ))}
    </>
  );
};

export default ProjectCard;
