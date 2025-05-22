import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleCard from './components/TitleCard';
import Season from './components/Season';
import { getSeasonIcon, calculateSeason } from './utils/seasonCalculator';
import './App.css';

// test comment for pre commit

const App: React.FC = () => {
  const [season, setSeason] = useState<number>(8);
  const [seasonState, setSeasonState] = useState(getSeasonIcon());

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'Boston',
            appid: 'a973c7588f25f457987274e21d050af1'
          }
        });
        const tempMax = response.data.main.temp_max;
        const tempFahrenheit = (((tempMax - 273.15) * 9) / 5) + 32;
        setSeason(calculateSeason(tempFahrenheit));
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSeasonState(getSeasonIcon());
    const interval = setInterval(() => setSeasonState(getSeasonIcon()), 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="app">
      <TitleCard {...seasonState} />
      <Season season={season} />
    </div>
  );
};

export default App;
