import { useEffect, useState } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Common from "./common";
import { fetchVehicleTypes } from "../services/services";

const Step3VehicleType = ({ data, setData, onNext ,onReset}) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchVehicleTypes(data.wheels).then((res) => {
      setTypes(res.data);
    });
  }, [data.wheels]);

  const handleChange = (e) => {
    setData({ ...data, vehicleType: e.target.value });
  };

  const renderOptions = () => (
    <RadioGroup value={data.vehicleType} onChange={handleChange}>
      {types?.map((type) => (
        <FormControlLabel
          key={type.id}
          value={type.id}
          control={<Radio />}
          label={type.name}
        />
      ))}
    </RadioGroup>
  );

  return (
    <Common
      disabled={!data.vehicleType}
      handleNext={onNext}
      ReturnJsx={renderOptions}
      LableValue="Type of vehicle?"
      onReset={onReset}
    />
  );
};

export default Step3VehicleType;
