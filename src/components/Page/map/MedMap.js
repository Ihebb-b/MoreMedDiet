// Map.js
import React from 'react';

function Map({ onSelectCountry }) {
  // Handle click on a country and pass the country code to the parent
  const handleCountryClick = (event) => {
    const countryCode = event.target.id;
    onSelectCountry(countryCode);
  };

  return (
    <div className="map-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 500"
        className="svg-map"
        onClick={handleCountryClick}
      >
        {/* Example SVG paths for specified countries. Replace paths with accurate data as needed */}
        <path id="DZ" d="M100,100 L200,100 L200,200 L100,200 Z" fill="#ccc" /> {/* Algeria */}
        <path id="TN" d="M220,100 L270,100 L270,150 L220,150 Z" fill="#ccc" /> {/* Tunisia */}
        <path id="FR" d="M300,100 L350,100 L350,150 L300,150 Z" fill="#ccc" /> {/* France */}
        <path id="IT" d="M370,100 L420,100 L420,150 L370,150 Z" fill="#ccc" /> {/* Italy */}
        <path id="ES" d="M150,200 L200,200 L200,250 L150,250 Z" fill="#ccc" /> {/* Spain */}
        <path id="AL" d="M450,200 L500,200 L500,250 L450,250 Z" fill="#ccc" /> {/* Albania */}
        <path id="BA" d="M520,200 L570,200 L570,250 L520,250 Z" fill="#ccc" /> {/* Bosnia and Herzegovina */}
        <path id="HR" d="M590,200 L640,200 L640,250 L590,250 Z" fill="#ccc" /> {/* Croatia */}
        <path id="CY" d="M660,200 L710,200 L710,250 L660,250 Z" fill="#ccc" /> {/* Cyprus */}
        <path id="GR" d="M730,200 L780,200 L780,250 L730,250 Z" fill="#ccc" /> {/* Greece */}
        <path id="LB" d="M100,300 L150,300 L150,350 L100,350 Z" fill="#ccc" /> {/* Lebanon */}
        <path id="SY" d="M170,300 L220,300 L220,350 L170,350 Z" fill="#ccc" /> {/* Syria */}
        <path id="MA" d="M240,300 L290,300 L290,350 L240,350 Z" fill="#ccc" /> {/* Morocco */}
        <path id="EG" d="M310,300 L360,300 L360,350 L310,350 Z" fill="#ccc" /> {/* Egypt */}
        <path id="LY" d="M380,300 L430,300 L430,350 L380,350 Z" fill="#ccc" /> {/* Libya */}
        <path id="PS" d="M450,300 L500,300 L500,350 L450,350 Z" fill="#ccc" /> {/* Palestine */}
        <path id="TR" d="M520,300 L570,300 L570,350 L520,350 Z" fill="#ccc" /> {/* Turkey */}
        <path id="MT" d="M590,300 L640,300 L640,350 L590,350 Z" fill="#ccc" /> {/* Malta */}
        <path id="MC" d="M660,300 L710,300 L710,350 L660,350 Z" fill="#ccc" /> {/* Monaco */}
        <path id="ME" d="M730,300 L780,300 L780,350 L730,350 Z" fill="#ccc" /> {/* Montenegro */}
        <path id="SI" d="M800,300 L850,300 L850,350 L800,350 Z" fill="#ccc" /> {/* Slovenia */}
      </svg>
    </div>
  );
}

export default Map;
