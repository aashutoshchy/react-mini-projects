const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherByCity = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  const data = await response.json();
  return data;
};

export const getNextHoursForecast = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );
  const data = await response.json();
  return data;
};
