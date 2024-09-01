import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchCities = async (input) => {
        try {
            const config = {
                method: 'get',
                url: `https://api.countrystatecity.in/v1/countries/IN/cities`,
                headers: {
                    'X-CSCAPI-KEY': 'clQ2M3htREl4Y3N5TlBHYW9BYmRpVTZjN1dFT1ZIelM1V2xCaHpBYg==',
                },
            };

            const response = await axios(config);
            const filteredCities = response.data
                .filter((city) =>
                    city.name.toLowerCase().startsWith(input.toLowerCase())
                )
                .slice(0, 5);

            setSuggestions(filteredCities);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const handleCityChange = (e) => {
        const input = e.target.value;
        setCity(input);
        if (input.length > 1) {
            fetchCities(input);
        } else {
            setSuggestions([]);
        }
    };

    const selectCity = (cityName) => {
        setCity(cityName);
        setSuggestions([]);
        setError('');
    };

    const fetchWeather = () => {
        if (city.trim() === '') {
            setError('Please enter a city name');
        } else {
            setError('');
            navigate(`/weather/${city}`);
        }
    };

    return (
        <div className="main-wrapper">
            <div className="home-container">
                <header className="header">
                    <h1>Weather App</h1>
                </header>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={handleCityChange}
                    />
                    <button onClick={fetchWeather} style={{ margin: '10px' }}>
                        Get Weather
                    </button>
                    {error && <p className="error-message1">{error}</p>}
                    {suggestions.length > 0 && (
                        <ul className="suggestions">
                            {suggestions.map((city) => (
                                <li key={city.id} onClick={() => selectCity(city.name)}>
                                    {city.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '0px' }}>
                        <Link to="/about" style={{ fontSize: '16px', color: '#007bff' }}>
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
