import React, { useState } from "react";
import { TextField } from "@mui/material";
import Common from "./common";

const Step1Name = ({ data, setData, onNext,onReset }) => {
  const [errors, setErrors] = useState({ firstName: false, lastName: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validate = () => {
    const newErrors = {
      firstName: !data.firstName || data.firstName.trim() === "",
      lastName: !data.lastName || data.lastName.trim() === "",
    };
    setErrors(newErrors);
    return !newErrors.firstName && !newErrors.lastName;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };
  const returnValue = () => {
    return (
      <>
        <TextField
          fullWidth
          margin="normal"
          label="First Name"
          variant="outlined"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          error={errors.firstName}
          helperText={errors.firstName ? "First name is required" : ""}
          autoComplete="off"
        />

        <TextField
          fullWidth
          margin="normal"
          label="Last Name"
          variant="outlined"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          error={errors.lastName}
          helperText={errors.lastName ? "Last name is required" : ""}
          autoComplete="off"
        />
      </>
    );
  };

  return (
    <Common
      disabled={!data.firstName || !data.lastName}
      handleNext={handleNext}
      ReturnJsx={returnValue}
      LableValue={"First, what's your name?"}onReset={onReset}
    />
  );
};

export default Step1Name;
