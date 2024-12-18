import { useEffect, useState } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Common from "./common";
import { fetchVehicles } from "../services/services";

const Step4VehicleModel = ({ data, setData, onNext,onReset }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetchVehicles(data.vehicleType).then((res) => setModels(res.data));
  }, [data.vehicleType]);

  const handleChange = (e) => {
    setData({ ...data, vehicleModel: e.target.value });
  };

  const renderOptions = () => (
    <RadioGroup value={data.vehicleModel} onChange={handleChange}>
      {models.map((model) => (
        <FormControlLabel
          key={model.id}
          value={model.id}
          control={<Radio />}
          label={model.name}
        />
      ))}
    </RadioGroup>
  );

  return (
    <Common
      disabled={!data.vehicleModel}
      handleNext={onNext}
      ReturnJsx={renderOptions}
      LableValue="Select specific model"
      onReset={onReset}
    />
  );
};

export default Step4VehicleModel;
