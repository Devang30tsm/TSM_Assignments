import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async (city) => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        if (!response.ok) {
          throw new Error("Something not well");
        }
        const data = await response.json();
        if (data) {
          const current = data.current_condition[0];
          setWeatherData({
            location: city,
            condition: current.weatherDesc[0].value,
            temp: current.temp_C,
            feelsLike: current.FeelsLikeC,
            humidity: current.humidity,
            wind: current.windspeedKmph,
            uv: current.uvIndex,
          });
        }
      } catch (error) {
        setError(error.message);
        setWeatherData(null);
      } finally {
        setLoading(false)
      }
    };
    fetchWeather(city);
  }, [city]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">🌤️ Weather App</h1>

      <input
        className="border p-2 w-full mb-4"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {weatherData && (
        <div className="bg-blue-100 p-4 rounded shadow space-y-2  dark:text-black">
          <h2 className="text-xl font-semibold">{weatherData.location}</h2>
          <p>
            <strong>🌤️ Condition:</strong> {weatherData.condition}
          </p>
          <p>
            <strong>🌡️ Temperature:</strong> {weatherData.temp}°C
          </p>
          <p>
            <strong>🧊 Feels Like:</strong> {weatherData.feelsLike}°C
          </p>
          <p>
            <strong>💧 Humidity:</strong> {weatherData.humidity}%
          </p>
          <p>
            <strong>🌬️ Wind Speed:</strong> {weatherData.wind} km/h
          </p>
          <p>
            <strong>🌞 UV Index:</strong> {weatherData.uv}
          </p>
        </div>
      )}
    </div>
  );
}
