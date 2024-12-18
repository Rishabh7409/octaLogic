import { useEffect, useState } from "react";
import Step2Wheels from "./Wheel";
import Step3VehicleType from "./VehicleType";
import Step4VehicleModel from "./VehicleModel";
import Step5DateRange from "./DateRange";
import Step1Name from "./NameInput";
import { fetchBookings, submitBooking } from "../services/services";
import { Box, Button } from "@mui/material";
import BookingList from "./BookingData";

const BookingForm = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleType: "",
    vehicleModel: "",
    dateRange: null,
  });
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetchBookings().then((res) => setBooking(res.data));
  }, []);
  const handleSubmit = () => {
    (async () => {
      await submitBooking(data).then(() => alert("Booking Successful"));
      window.location.reload();
    })();
  };

  return (
    <>
      {step == 0 ? (
        <BookingList bookings={booking} onNext={() => setStep(1)} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            width: "auto",
            backgroundColor: "#f7f7f7",
          }}
        >
          {" "}
        
          {step === 1 && (
            <Step1Name
              data={data}
              setData={setData}
              onNext={() => setStep(2)}
              onReset={()=> setStep(0)}
            />
          )}
          {step === 2 && (
            <Step2Wheels
              data={data}
              setData={setData}
              onNext={() => setStep(3)}
              onReset={()=> setStep(0)}
            />
          )}
          {step === 3 && (
            <Step3VehicleType
              data={data}
              setData={setData}
              onNext={() => setStep(4)}
              onReset={()=> setStep(0)}
            />
          )}
          {step === 4 && (
            <Step4VehicleModel
              data={data}
              setData={setData}
              onNext={() => setStep(5)}
              onReset={()=> setStep(0)}
            />
          )}
          {step === 5 && (
            <Step5DateRange
              data={data}
              setData={setData}
              onSubmit={handleSubmit}
              onReset={()=> setStep(0)}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default BookingForm;
