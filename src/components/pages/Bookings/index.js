import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { fetchAPI, submitAPI } from "../../../utils/fakeAPI";
import pages from "../../../utils/pages";
import BookingForm from "./BookingForm";

const updateTimes = (allowedTimes, date) => {
  console.log("date", date);
  const response = fetchAPI(new Date(date));
  console.log("response", response);
  return response.length !== 0 ? response : allowedTimes;
};

const initializeTimes = (initialAllowedTimes) => [
  ...initialAllowedTimes,
  ...fetchAPI(new Date()),
];

const Bookings = () => {
  const [allowedTimes, onDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get("confirmedBooking").path);
  };

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm
        allowedTimes={allowedTimes}
        onDateChange={onDateChange}
        submitData={submitData}
      />
    </div>
  );
};

export default Bookings;
