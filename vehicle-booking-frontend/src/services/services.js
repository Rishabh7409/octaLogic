import axios from "axios";
import { URL_CONFIG } from "../config/config";

export const fetchVehicleTypes = async (wheels) => {
  return await axios.get(`${URL_CONFIG.DEV_URL}/vehicle-types?wheels=${wheels}`);
};

export const fetchVehicles = async (typeId) => {
  return await axios.get(`${URL_CONFIG.DEV_URL}/vehicles?type_id=${typeId}`);
};

export const submitBooking = async (data) => {
  return await axios.post(`${URL_CONFIG.DEV_URL}/book-vehicle`, data);
};

export const fetchBookings = async () => {
    return await axios.get(`${URL_CONFIG.DEV_URL}/bookings`);
  };
