import { useState } from 'react';

const TemperatureDropdown = () => {
  const [selectedTemperature, setSelectedTemperature] = useState('Seleccione una temperatura');

  const temperatures = ['10°C', '20°C', '30°C', '40°C'];

  return (
    <div className="p-4 bg-muted/50 rounded-xl">
      <label htmlFor="temperature" className="block text-sm font-medium text-white">
        Temperaturas
      </label>
      <select
        id="temperature"
        value={selectedTemperature}
        onChange={(e) => setSelectedTemperature(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option disabled>Seleccione una temperatura</option>
        {temperatures.map((temp) => (
          <option key={temp} value={temp}>
            {temp}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemperatureDropdown; 