import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Common = ({
  disabled,
  handleNext,
  LableValue,
  ReturnJsx,
  maxWidth = 400,onReset
}) => {
  return (
    <Box
      sx={{
        maxWidth: maxWidth,
        margin: "auto",
        mt: 12,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >  
      <Typography variant="h5" color="black">
        {LableValue}
      </Typography>
      {ReturnJsx()}
      <Button
    variant="contained"
    // fullWidth
    onClick={onReset}
    sx={{
      mt: 2,
      backgroundColor: "grey",
      "&:hover": {
        backgroundColor: "black",
      },
    }}
  >
    Reset   </Button> <Button
        variant="contained"
        // fullWidth
        onClick={handleNext}
        sx={{
          mt: 2,
          backgroundColor: "grey",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
        disabled={disabled}
      >
        Next
      </Button>
    </Box>
  );
};

export default Common;
