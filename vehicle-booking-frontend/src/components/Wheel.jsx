import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Common from "./common";

const Step2Wheels = ({ data, setData, onNext,onReset }) => {
  const handleChange = (e) => {
    setData({ ...data, wheels: e.target.value });
  };

  const renderOptions = () => (
    <RadioGroup value={data.wheels} onChange={handleChange}>
      <FormControlLabel value="2" control={<Radio />} label="2 Wheels" />
      <FormControlLabel value="4" control={<Radio />} label="4 Wheels" />
    </RadioGroup>
  );

  return (
    <Common
      disabled={!data.wheels}
      handleNext={onNext}
      ReturnJsx={renderOptions}
      LableValue="Number of wheels?"
      onReset={onReset}
    />
  );
};

export default Step2Wheels;
