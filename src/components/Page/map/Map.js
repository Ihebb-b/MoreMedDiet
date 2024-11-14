import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const countries = ['Tunisia', 'ALgeria', 'Marroco', 'Palestine', 'Lebanon']; // Add more countries as needed

function Map({ onSelectCountry }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    onSelectCountry(country); // Send selected country back to parent component or to the backend
  };

  return (
    <div className="d-flex justify-content-center align-items-center map-container">
      <div className="position-relative" style={{ width: '80%' }}>
        <img
          src="../../assets/images/world-map.png"
          alt="World Map"
          style={{ width: '100%', borderRadius: '8px', opacity: 0.8 }}
        />
        {countries.map((country, index) => (
          <Badge
            key={index}
            pill
            className={`position-absolute ${country}`}
            style={{
              cursor: 'pointer',
              padding: '1em',
              backgroundColor: country === selectedCountry ? '#007bff' : '#6c757d',
            }}
            onClick={() => handleCountryClick(country)}
          >
            {country}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default Map;
