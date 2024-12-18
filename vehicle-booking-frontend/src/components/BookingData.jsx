import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";
import moment from "moment";

const BookingList = ({ bookings,onNext }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        p: 2,
      }}
    > 
      <Box sx={{ width: "80%", maxWidth: 1000 }}>
      <Button
    variant="contained"
    // fullWidth
    onClick={onNext}
    sx={{
      // mt: 2,
      backgroundColor: "grey",
      "&:hover": {
        backgroundColor: "black",
      },
    }}
  >
    Book Vehicle
  </Button>
        <Typography variant="h5" align="center" gutterBottom>
          Booking List
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Vehicle Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Vehicle Type</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Start Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings && bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <TableRow key={index}>
                    <TableCell>{booking.id}</TableCell>
                    <TableCell>{booking.user_name}</TableCell>
                    <TableCell>{booking.Vehicle.name}</TableCell>
                    <TableCell>{booking.Vehicle.VehicleType.name}</TableCell>
                    <TableCell>
                      {moment(booking.start_date).format("DD-MM-YYYY")}
                    </TableCell>
                    <TableCell>
                      {moment(booking.end_date).format("DD-MM-YYYY")}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No bookings available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BookingList;
