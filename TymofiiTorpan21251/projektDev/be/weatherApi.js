import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.VISUAL_CROSSING_API_KEY;

export async function getWeather(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=${API_KEY}&include=days&contentType=json`;
  const response = await axios.get(url);
  return response.data;
}
