import "./App.css";
import WeatherForecast from "./blocks/WeatherForecast";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <WeatherForecast />
    </WeatherProvider>
  );
}

export default App;
