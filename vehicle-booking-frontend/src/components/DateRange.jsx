import React, { useState } from "react";
import dayjs from "dayjs";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Common from "./common";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

const Step5DateRange = ({ data, setData, onSubmit,onReset }) => {
  const [selectionRange, setSelectionRange] = useState(dayjs(new Date()));
  const [selectionRangeEnd, setSelectionEndRange] = useState(dayjs(new Date()));

  const handleSelect = (ranges) => {
    const range = ranges;
    setSelectionRange(range);
    setData({
      ...data,
      dateRange: { startDate: range, endDate: selectionRangeEnd },
    });
  };
  const handleSelectEnd = (ranges) => {
    const range = ranges;
    setSelectionEndRange(range);
    setData({
      ...data,
      dateRange: { startDate: selectionRange, endDate: range },
    });
  };

  const renderDatePicker = () => (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <DemoItem label="Start Date calendar">
        <DateCalendar value={selectionRange} onChange={handleSelect} />
      </DemoItem>
      <DemoItem label="End Date calendar">
        <DateCalendar value={selectionRangeEnd} onChange={handleSelectEnd} />
      </DemoItem>
    </div>
  );

  return (
    <Common
      disabled={
        !data.dateRange || !data.dateRange.startDate || !data.dateRange.endDate
      }
      handleNext={onSubmit}
      ReturnJsx={renderDatePicker}
      LableValue="Select date range"
      maxWidth={700}
      onReset={onReset}
    />
  );
};

export default Step5DateRange;
