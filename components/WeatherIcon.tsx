import React from 'react';
import { Cloud } from 'react-feather';

const WeatherIcon: React.FC = () => {
  return (
    <div className="weather-icon">
      <Cloud size={48} color="blue" />
    </div>
  );
};

export default WeatherIcon;