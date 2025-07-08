function WeatherWidget() {
  // Simulating a crash
  throw new Error("Weather API not available.");

  return (
    <div className="p-6 bg-white/10 backdrop-blur border border-white/20 shadow-lg rounded-xl text-white">
      <h3 className="text-xl font-bold mb-2">🌤 Weather</h3>
      <p>Sunny, 29°C</p>
    </div>
  );
}

export default WeatherWidget;
