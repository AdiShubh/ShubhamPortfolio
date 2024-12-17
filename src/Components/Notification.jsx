import React, { useState, useEffect } from "react";
import { Snackbar, Alert, Typography } from "@mui/material";

const Notification = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 20000); // Auto-close after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Snackbar
      open={open}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity="success"
        sx={{
          backgroundColor: "#b2dfdb", // Shaded green color
          padding: "20px", // Added padding
          borderRadius: "8px", // Rounded corners
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // Subtle shadow
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6" // Larger text size
          sx={{ fontWeight: "bold", color: "#004d40" }} // Darker green text
        >
          🚀 My new portfolio is live!{" "}
          <a
            href="https://yournewportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "#004d40" }}
          >
            Visit here
          </a>
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
