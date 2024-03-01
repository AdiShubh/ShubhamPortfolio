import React from "react";
import "../../src/App.css";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Navbar = () => {
  return (
    <>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography variant="h5" marginLeft={"80px"}>
                <AcUnitIcon
                  fontSize="medium"
                  sx={{
                    margin: "0 5px 0 5px",
                  }}
                />
                Portfolio
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              <ScrollLink className="ScrollLink" to="About" smooth={true}>
                About
              </ScrollLink>
              <ScrollLink className="ScrollLink" to="Skills" smooth={true}>
                Skills
              </ScrollLink>
              <ScrollLink className="ScrollLink" to="Experience" smooth={true}>
                Experience
              </ScrollLink>
              <ScrollLink className="ScrollLink" to="Projects" smooth={true}>
                Projects
              </ScrollLink>
              <ScrollLink className="ScrollLink" to="Education" smooth={true}>
                Education
              </ScrollLink>
              <ScrollLink className="ScrollLink" to="Contacts" smooth={true}>
                Contacts
              </ScrollLink>
            </Box>
            {/* <Box>
              <Button>GitHub Profile</Button>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
